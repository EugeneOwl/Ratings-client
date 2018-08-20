import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { ActivatedRoute }    from '@angular/router';
import { UserService }       from '../../../../service/user.service';
import { User }              from '../../../../model/User';
import { RoleService }       from '../../../../service/role.service';
import { Role }              from '../../../../model/Role';
import { UserUpdate }        from '../../../../model/UserUpdate';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
    userId: number;
    user: User = {
        id: null,
        username: '',
        mobileNumber: '',
        roles: [],
        tasks: []
    };
    roleCheckboxes;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private userService: UserService,
                private roleService: RoleService,) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.userId = params['id'];
        });

        if (this.userId) {
            this.userService.get(this.userId).subscribe(
                success => {
                    this.user = success;
                    this.initializeRoleCheckboxes();
                }
            );
        }
    }

    shouldRoleBeCheckedByDefault(roleLabel: string): boolean {
        for (const role of this.user.roles) {
            if (role.label === roleLabel) {

                return true;
            }
        }

        return false;
    }


    updateRawRoles(): void {
        const userUpdate: UserUpdate = {
            id: this.user.id,
            mobileNumber: this.user.mobileNumber,
            roleIds: this.getCheckedRoleIds()
        };
        this.userService.save(userUpdate).subscribe(result => {
            this.goBack();
        });
    }

    goBack(): void {
        this.router.navigate(['client/admin/users']);
    }

    private getCheckedRoleIds(): number[] {
        return this.roleCheckboxes.filter(roleCheckbox => roleCheckbox.checked)
        .map(roleCheckbox => roleCheckbox.id);
    }

    private initializeRoleCheckboxes(): void {
        this.roleService.getAll().subscribe((roles: Role[]) => {
            this.roleCheckboxes = roles;
            for (let role of this.roleCheckboxes) {
                role.checked = this.shouldRoleBeCheckedByDefault(role.label);
            }
        });
    }
}
