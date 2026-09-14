export interface BodhiPillar {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  modules: string[];
}

export interface BodhiCapability {
  id: string;
  title: string;
  desc: string;
}

export interface WomenLeadershipState {
  state: string;
  tag: string;
  details: string;
}

export interface StrategyArea {
  name: string;
  desc: string;
}

export interface BodhiSectionData {
  acronym: string;
  title: string;
  subtitle: string;
  leadNarrative: string;
  pillars: BodhiPillar[];
  capabilities: BodhiCapability[];
  womenLeadershipStates: WomenLeadershipState[];
  strategyAreas: StrategyArea[];
}
