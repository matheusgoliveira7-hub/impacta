export interface SkillItem {
  id: string;
  title: string;
  application: string;
  iconName: 'organization' | 'planning' | 'communication' | 'leadership' | 'finance' | 'criticalThinking';
}

export interface TimelineItem {
  number: string;
  title: string;
  description: string;
}

export interface NextStepItem {
  title: string;
  description: string;
  tag: string;
}

export interface AboutFundament {
  number: string;
  title: string;
  description: string;
}

export interface ProjectPrinciple {
  title: string;
  description: string;
}
