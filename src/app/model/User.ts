import { Role } from './Role';
import { Task } from './Task';

export interface User {
    id: number;
    username: string;
    mobileNumber: string;
    roles: Role[];
    tasks: Task[];
}