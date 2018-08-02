import { Role } from './Role';

export class User {
    id: number;
    username: string;
    roles: Array<Role>;

    constructor(id: number, username: string, roles: Array<Role>) {
        this.id = id;
        this.username = username;
        this.roles = roles;
    }
}