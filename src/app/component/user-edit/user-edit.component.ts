import { Component, OnInit } from '@angular/core';
import { OnDestroy }         from '@angular/core';
import { Router }            from '@angular/router';
import { ActivatedRoute }    from '@angular/router';
import { UserService }       from '../../service/user.service';
import { Subscription }      from 'rxjs';
import { User }              from '../../model/User';
import { RoleService }       from '../../service/role.service';
import { Role }              from '../../model/Role';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
    user: User;
    roleCheckboxes;

    sub: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService,
                private roleService: RoleService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            const id = params['id'];
            if (id) {
                this.userService.get(id).subscribe((user: User) => {
                    if (user) {
                        this.user = user;
                        this.initializeRoleCheckboxes();
                    } else {
                        console.log(`User with id '${id}' not found, returning to list`);
                        this.gotoList();
                    }
                });
            }
        });
    }

    shouldRoleBeCheckedByDefault(roleValue: string): boolean {
        for (const role of this.user.roles) {
            if (role.value === roleValue) {

                return true;
            }
        }

        return false;
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }


    updateRawRoles(): void {
        this.user.roles = this.getCheckedRoles();
        this.userService.save(this.user).subscribe(result => {
            this.gotoList();
        }, error => console.error(error));
    }

    gotoList(): void {
        this.router.navigate(['client/admin']);
    }

    private getCheckedRoles(): Array<Role> {
        return this.roleCheckboxes.filter(roleCheckbox => roleCheckbox.checked)
            .map(roleCheckbox => new Role(roleCheckbox.id, roleCheckbox.value));
    }

    private initializeRoleCheckboxes() {
        this.roleService.getAll().subscribe((roles: Array<Role>) => {
            this.roleCheckboxes = roles;
            for (let role of this.roleCheckboxes) {
                role.checked = this.shouldRoleBeCheckedByDefault(role.value);
            }
        });
    }
}
