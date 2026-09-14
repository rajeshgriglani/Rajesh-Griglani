import { ENV } from '../config/env';

export interface ApiClientConfig {
  baseUrl: string;
  timeout: number;
  useMock: boolean;
  headers: Record<string, string>;
  mockLatencyMs: number;
}

export const API_CONFIG: ApiClientConfig = {
  baseUrl: ENV.apiBaseUrl,
  timeout: 10000,
  useMock: ENV.useMockApi,
  mockLatencyMs: 250,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Client-Version': '1.0.0',
  },
};
