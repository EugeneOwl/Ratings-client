import { User } from './User';

export interface Rating {
    id: number;
    label: string;
    sender: User;
    recipient: User;
}