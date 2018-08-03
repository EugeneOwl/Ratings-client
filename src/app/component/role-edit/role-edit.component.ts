import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                 from 'rxjs';
import { ActivatedRoute, Router }       from '@angular/router';
import { FormControl }                  from '@angular/forms';
import { Validators }                   from '@angular/forms';
import { RoleService }                  from '../../service/role.service';
import { Role }                         from '../../model/Role';

@Component({
    selector: 'app-role-edit',
    templateUrl: './role-edit.component.html',
    styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit, OnDestroy {
    id = new FormControl();
    value = new FormControl('',[Validators.required]);

    sub: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private roleService: RoleService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            const id = params['id'];
            if (id) {
                this.roleService.get(id).subscribe((role: Role) => {
                    if (role) {
                        this.id.setValue(role.id);
                        this.value.setValue(role.value);
                    } else {
                        console.log(`Role with id '${id}' not found, returning to list`);
                        this.gotoList();
                    }
                });
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    save() {
        this.roleService.save(
            new Role( this.id.value, this.value.value)
        ).subscribe(result => {
            this.gotoList();
        }, error => console.error(error));
    }

    gotoList() {
        this.router.navigate(['client/admin']);
    }

    remove(id) {
        this.roleService.remove(id).subscribe(result => {
            this.gotoList();
        }, error => console.error(error));
    }
}
