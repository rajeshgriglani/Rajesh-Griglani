import { request } from './client';
import { TimelineItem, StateExperience } from '../types/journey';
import { TIMELINE_DATA, STATES_EXPERIENCE } from '../data/mock/journey';
import { ApiResponse } from '../types/api';

export const getTimeline = async (): Promise<ApiResponse<TimelineItem[]>> => {
  return request<TimelineItem[]>('/journey/timeline', { method: 'GET' }, () => TIMELINE_DATA);
};

export const getStateExperiences = async (): Promise<ApiResponse<StateExperience[]>> => {
  return request<StateExperience[]>('/journey/states', { method: 'GET' }, () => STATES_EXPERIENCE);
};
