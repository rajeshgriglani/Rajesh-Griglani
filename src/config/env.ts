// Environment Configuration
// Reads client-side environment variables with safe defaults

export interface AppEnvConfig {
  apiBaseUrl: string;
  siteUrl: string;
  cdnUrl: string;
  useMockApi: boolean;
  apiVersion: string;
  environment: 'development' | 'production' | 'test';
}

const getEnv = (key: string, defaultValue = ''): string => {
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    const val = import.meta.env[key];
    if (typeof val === 'string' && val.length > 0) {
      return val;
    }
  }
  return defaultValue;
};

export const ENV: AppEnvConfig = {
  apiBaseUrl: getEnv('VITE_API_BASE_URL', '/api/v1'),
  siteUrl: getEnv('VITE_SITE_URL', 'https://rajeshgriglani.com'),
  cdnUrl: getEnv('VITE_CDN_URL', ''),
  useMockApi: getEnv('VITE_USE_MOCK_API', 'true') === 'true',
  apiVersion: getEnv('VITE_API_VERSION', 'v1'),
  environment: (getEnv('MODE', 'development') as 'development' | 'production' | 'test') || 'development',
};
