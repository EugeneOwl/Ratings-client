import { Component, OnInit } from '@angular/core';
import { Inject }            from '@angular/core';
import { Router }            from '@angular/router';
import { ActivatedRoute }    from '@angular/router';
import { UserService }       from '../../service/user.service';
import { User }              from '../../model/User';
import { RoleService }       from '../../service/role.service';
import { Role }              from '../../model/Role';
import { MatDialogRef }      from '@angular/material';
import { MAT_DIALOG_DATA }   from '@angular/material';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
    user: User;
    roleCheckboxes;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService,
                private roleService: RoleService,
                public dialogRef: MatDialogRef<UserEditComponent>,
                @Inject(MAT_DIALOG_DATA) public parentData) {
    }

    ngOnInit() {
        if (this.parentData.id) {
            this.userService.get(this.parentData.id).subscribe((user: User) => {
                if (user) {
                    this.user = user;
                    this.initializeRoleCheckboxes();
                } else {
                    console.log(`User with id '${this.parentData.id}' not found, returning to list`);
                    this.goBack();
                }
            });
        }
    }

    shouldRoleBeCheckedByDefault(roleValue: string): boolean {
        for (const role of this.user.roles) {
            if (role.value === roleValue) {

                return true;
            }
        }

        return false;
    }


    updateRawRoles(): void {
        this.user.roles = this.getCheckedRoles();
        this.userService.save(this.user).subscribe(result => {
            this.goBack();
        }, error => console.error(error));
    }

    goBack(): void {
        this.dialogRef.close();
    }

    private getCheckedRoles(): Array<Role> {
        return this.roleCheckboxes.filter(roleCheckbox => roleCheckbox.checked)
        .map(roleCheckbox => new Role(roleCheckbox.id, roleCheckbox.value));
    }

    private initializeRoleCheckboxes(): void {
        this.roleService.getAll().subscribe((roles: Array<Role>) => {
            this.roleCheckboxes = roles;
            for (let role of this.roleCheckboxes) {
                role.checked = this.shouldRoleBeCheckedByDefault(role.value);
            }
        });
    }
}
