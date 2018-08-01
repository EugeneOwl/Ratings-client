import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                 from 'rxjs';
import { ActivatedRoute, Router }       from '@angular/router';
import { NgForm }                       from '@angular/forms';
import { RoleService }                  from '../../service/role.service';

@Component({
    selector: 'app-role-edit',
    templateUrl: './role-edit.component.html',
    styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit, OnDestroy {
    role: any = {};

    sub: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private roleService: RoleService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            const id = params['id'];
            if (id) {
                this.roleService.get(id).subscribe((role: any) => {
                    if (role) {
                        this.role = role;
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

    gotoList() {
        this.router.navigate(['client/list']);
    }

    save(form: NgForm) {
        this.roleService.save(form).subscribe(result => {
            this.gotoList();
        }, error => console.error(error));
    }

    remove(id) {
        this.roleService.remove(id).subscribe(result => {
            this.gotoList();
        }, error => console.error(error));
    }
}
