import { ApiResponse, ApiErrorDetails } from '../types/api';
import { API_CONFIG } from './config';

export class ApiError extends Error {
  public code: string;
  public details?: Record<string, unknown> | null;
  public status?: number;

  constructor(message: string, code = 'API_ERROR', status = 500, details?: Record<string, unknown> | null) {
    super(message);
    this.name = 'ApiError';
    this.code = code;
    this.status = status;
    this.details = details;
  }
}

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function request<T>(
  endpoint: string,
  options: RequestInit = {},
  mockFallback?: () => Promise<T> | T
): Promise<ApiResponse<T>> {
  // If mock mode is explicitly forced or no real endpoint is available
  if (API_CONFIG.useMock && mockFallback) {
    if (API_CONFIG.mockLatencyMs > 0) {
      await delay(API_CONFIG.mockLatencyMs);
    }
    try {
      const mockResult = await mockFallback();
      return {
        success: true,
        data: mockResult,
        message: null,
        error: null,
        meta: {
          timestamp: new Date().toISOString(),
          version: 'v1-mock',
        },
      };
    } catch (err: any) {
      return {
        success: false,
        data: null,
        message: err.message || 'Mock execution failed',
        error: {
          code: 'MOCK_ERROR',
          message: err.message || 'Failed to resolve mock data',
        },
        meta: {
          timestamp: new Date().toISOString(),
          version: 'v1-mock',
        },
      };
    }
  }

  const url = `${API_CONFIG.baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), API_CONFIG.timeout);

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...API_CONFIG.headers,
        ...options.headers,
      },
      signal: controller.signal,
    });

    clearTimeout(id);

    if (!response.ok) {
      let errorBody: any = null;
      try {
        errorBody = await response.json();
      } catch {
        errorBody = { message: response.statusText };
      }

      throw new ApiError(
        errorBody?.message || `HTTP ${response.status}: ${response.statusText}`,
        errorBody?.error?.code || `HTTP_${response.status}`,
        response.status,
        errorBody?.details || null
      );
    }

    const payload = await response.json();

    // Check if the server already returned standard format
    if (typeof payload === 'object' && payload !== null && 'success' in payload) {
      return payload as ApiResponse<T>;
    }

    return {
      success: true,
      data: payload as T,
      meta: {
        timestamp: new Date().toISOString(),
        version: 'v1',
      },
    };
  } catch (err: any) {
    clearTimeout(id);

    // If fetch failed (e.g. backend server not yet online in dev) and mock fallback is available, graceful fallback
    if (mockFallback) {
      console.warn(`[API Client] Real request to ${endpoint} failed (${err.message}), falling back to mock provider.`);
      const mockResult = await mockFallback();
      return {
        success: true,
        data: mockResult,
        message: 'Loaded from local content registry fallback',
        error: null,
        meta: {
          timestamp: new Date().toISOString(),
          version: 'v1-fallback',
        },
      };
    }

    const errorDetails: ApiErrorDetails = {
      code: err.code || (err.name === 'AbortError' ? 'TIMEOUT_ERROR' : 'NETWORK_ERROR'),
      message: err.message || 'An unexpected network error occurred.',
      details: err.details || null,
    };

    return {
      success: false,
      data: null,
      message: errorDetails.message,
      error: errorDetails,
      meta: {
        timestamp: new Date().toISOString(),
        version: 'v1',
      },
    };
  }
}
