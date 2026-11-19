export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface BranchHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface AwarenessTopic {
  id: string;
  title: string;
  shortDesc: string;
  content: string;
  icon: string;
  tips: string[];
}

export interface Achievement {
  id: string;
  title: string;
  year: string;
  organization: string;
  description: string;
  category: 'leadership' | 'sales' | 'customer' | 'milestone';
  badge: string;
  imageUrl?: string;
}
