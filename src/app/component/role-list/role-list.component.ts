import { Component, OnInit } from '@angular/core';
import { RoleService }       from '../../service/role.service';

@Component({
    selector: 'app-role-list',
    templateUrl: './role-list.component.html',
    styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
    roles: Array<any>;

    constructor(private roleService: RoleService) {
    }

    ngOnInit() {
        this.roleService.getAll().subscribe(roles => {
            this.roles = roles;
        });
    }

}
