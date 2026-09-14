import { request } from './client';
import {
  BodhiSectionData,
  BodhiPillar,
  BodhiCapability,
  WomenLeadershipState,
  StrategyArea,
} from '../types/bodhi';
import {
  BODHI_DATA,
  BODHI_PILLARS,
  BODHI_CAPABILITIES,
  WOMEN_LEADERSHIP_STATES,
  STRATEGY_AREAS,
} from '../data/mock/bodhi';
import { ApiResponse } from '../types/api';

export const getBodhiSection = async (): Promise<ApiResponse<BodhiSectionData>> => {
  return request<BodhiSectionData>('/bodhi', { method: 'GET' }, () => BODHI_DATA);
};

export const getBodhiPillars = async (): Promise<ApiResponse<BodhiPillar[]>> => {
  return request<BodhiPillar[]>('/bodhi/pillars', { method: 'GET' }, () => BODHI_PILLARS);
};

export const getBodhiCapabilities = async (): Promise<ApiResponse<BodhiCapability[]>> => {
  return request<BodhiCapability[]>('/bodhi/capabilities', { method: 'GET' }, () => BODHI_CAPABILITIES);
};

export const getWomenLeadershipStates = async (): Promise<ApiResponse<WomenLeadershipState[]>> => {
  return request<WomenLeadershipState[]>('/bodhi/women-leadership', { method: 'GET' }, () => WOMEN_LEADERSHIP_STATES);
};

export const getStrategyAreas = async (): Promise<ApiResponse<StrategyArea[]>> => {
  return request<StrategyArea[]>('/bodhi/strategy-areas', { method: 'GET' }, () => STRATEGY_AREAS);
};
