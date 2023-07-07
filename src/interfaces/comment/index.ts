import { UserInterface } from 'interfaces/user';
import { MealInterface } from 'interfaces/meal';
import { GetQueryInterface } from 'interfaces';

export interface CommentInterface {
  id?: string;
  content: string;
  user_id?: string;
  meal_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  meal?: MealInterface;
  _count?: {};
}

export interface CommentGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  meal_id?: string;
}
