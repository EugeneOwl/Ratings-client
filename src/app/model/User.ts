import { Role } from './Role';

export class User {
    id: number;
    username: string;
    roles: Array<Role>;
    rawRoles: string;


    constructor(id: number = 0, username: string = '', roles: Array<Role> = [], rawRoles: string = '') {
        this.id = id;
        this.username = username;
        this.roles = roles;
        this.rawRoles = rawRoles;
    }
}