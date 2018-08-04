import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription }                 from 'rxjs';
import { ActivatedRoute, Router }       from '@angular/router';
import { FormControl }                  from '@angular/forms';
import { Validators }                   from '@angular/forms';
import { RoleService }                  from '../../service/role.service';
import { Role }                         from '../../model/Role';
import { MatDialogRef }                 from '@angular/material';
import { Inject }                       from '@angular/core';
import { MAT_DIALOG_DATA }              from '@angular/material';

@Component({
    selector: 'app-role-edit',
    templateUrl: './role-edit.component.html',
    styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {
    id: number;
    value = new FormControl('', [Validators.required]);

    constructor(private route: ActivatedRoute,
                private router: Router,
                private roleService: RoleService,
                public dialogRef: MatDialogRef<RoleEditComponent>,
                @Inject(MAT_DIALOG_DATA) public parentData) {
    }

    ngOnInit() {
        if (this.parentData.id) {
            this.roleService.get(this.parentData.id).subscribe((role: Role) => {
                if (role) {
                    this.id = role.id;
                    this.value.setValue(role.value);
                } else {
                    console.log(`Role with id '${this.parentData.id}' not found, returning to list`);
                    this.goBack();
                }
            });
        }
    }

    save(): void {
        this.roleService.save(
            new Role(this.id ? this.id : 0, this.value.value)
        ).subscribe(result => {
            this.goBack();
        }, error => console.error(error));
    }

    goBack(): void {
        this.dialogRef.close();
    }

    remove(id): void {
        this.roleService.remove(id).subscribe(result => {
            this.goBack();
        }, error => console.error(error));
    }
}
