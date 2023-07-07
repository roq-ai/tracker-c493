import { CommentInterface } from 'interfaces/comment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MealInterface {
  id?: string;
  name: string;
  description?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  comment?: CommentInterface[];
  user?: UserInterface;
  _count?: {
    comment?: number;
  };
}

export interface MealGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
}
