import { User } from './User';

export interface Task {
    id: number;
    label: string;
    description: string;
    evaluation: number;

    user: User;
    parent: Task;
}