export type FlightStage = 'class6_7' | 'class8_9' | 'class10';

export interface AlchemistCard {
  id: string;
  emoji: string;
  hobby: string;
  fitScore: number;
  scoreColor: string;
  streamTitle: string;
  tags: string[];
  futureRoles: string;
  overview: string;
  subjects: string[];
  unfairAdvantage: string;
  recommendedBoards: string[];
}

export interface QuestOption {
  id: string;
  label: string;
  title: string;
  description: string;
  outcome: string;
  streamAffinity: string;
  tacticalInsight: string;
}

export interface Quest {
  id: string;
  category: string;
  categoryBadgeClass: string;
  timeEstimate: string;
  xpReward: number;
  title: string;
  prompt: string;
  options: QuestOption[];
  solvedChoice?: string;
}

export interface Mentor {
  id: string;
  name: string;
  roleSchool: string;
  stream: string;
  bio: string;
  imageUrl: string;
  adviceSnippet: string;
  topics: string[];
  tags: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'student' | 'arya';
  text: string;
  suggestedStreams?: string[];
  suggestedCombos?: string[];
  timestamp: string;
}

export interface RadarQuestion {
  id: number;
  title: string;
  scenario: string;
  options: {
    text: string;
    dimension: 'Spatial' | 'Analytical' | 'Creative' | 'Biological' | 'Strategic';
    insight: string;
  }[];
}
