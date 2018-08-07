import { User } from './User';

export interface Rating {
    id: number;
    label: string;
    mark: number;
    sender: User;
    recipient: User;
}