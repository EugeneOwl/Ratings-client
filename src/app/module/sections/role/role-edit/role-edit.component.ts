import { Component, OnInit } from '@angular/core';
import { FormControl }       from '@angular/forms';
import { Validators }        from '@angular/forms';
import { RoleService }       from '../../../../service/role.service';
import { Role }              from '../../../../model/Role';
import { ActivatedRoute }    from '@angular/router';
import { Router }            from '@angular/router';

@Component({
    selector: 'app-role-edit',
    templateUrl: './role-edit.component.html',
    styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {
    roleId: number;
    label = new FormControl('', [Validators.required]);

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private roleService: RoleService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params['id'] !== 'new') {
                this.roleId = params['id'];
            }
        });

        if (this.roleId) {
            this.roleService.get(this.roleId).subscribe(
                (success: Role) => {
                    this.label.setValue(success.label);
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
}
