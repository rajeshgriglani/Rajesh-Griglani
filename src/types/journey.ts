import { BaseContentEntity } from './api';

export interface TimelineItem extends Partial<BaseContentEntity> {
  year: string;
  title: string;
  subtitle?: string;
  roleOrCategory: string;
  location?: string;
  description: string;
  highlight?: boolean;
}

export interface StateExperience {
  state: string;
  code: string;
  region: string;
  focus: string;
  description: string;
  cadresTrained?: string;
  keyInitiatives: string[];
}
