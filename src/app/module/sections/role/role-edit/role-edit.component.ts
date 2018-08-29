import { Component, OnInit } from '@angular/core';
import { FormControl }       from '@angular/forms';
import { Validators }        from '@angular/forms';
import { RoleService }       from '../../../../service/role.service';
import { Role }              from '../../../../model/Role';
import { ActivatedRoute }    from '@angular/router';
import { Router }            from '@angular/router';
import { SecurityService }   from '../../../../service/auth/security.service';

@Component({
    selector: 'app-role-edit',
    templateUrl: './role-edit.component.html',
    styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {
    roleId: number;
    originalRoleLabel = '';
    label = new FormControl('', [Validators.required]);
    permanentRoles: string[] = [];

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private roleService: RoleService,
                private securityService: SecurityService) {
    }

    ngOnInit() {
        this.permanentRoles = this.securityService.adminRoles.concat(this.securityService.userRoles);

        this.activatedRoute.params.subscribe(params => {
            if (params['id'] !== 'new') {
                this.roleId = params['id'];
            }
        });

        if (this.roleId) {
            this.roleService.get(this.roleId).subscribe(
                (success: Role) => {
                    this.label.setValue(success.label);
                    this.originalRoleLabel = success.label;
                }
            );
        }
    }

    save(): void {
        this.roleService.save({
            id: this.roleId ? this.roleId : 0,
            label: this.label.value
        }).subscribe(result => {
            this.goBack();
        });
    }

    goBack(): void {
        this.router.navigate(['client/admin/roles/']);
    }

    remove(id): void {
        this.roleService.remove(id).subscribe(result => {
            this.goBack();
        });
    }

    isRolePermanent(roleLabel: string): boolean {
        return this.permanentRoles.includes(roleLabel);
    }

    getErrorMessage(): string {

        return this.label.hasError('required') ? 'Role label is required.' : '';
    }
}
