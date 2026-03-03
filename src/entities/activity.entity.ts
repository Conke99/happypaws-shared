import { ActivityType } from '../constants';

export interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  description?: string;
  timestamp: string;
  /** Rating value, present when type is 'review' */
  rating?: number;
}
