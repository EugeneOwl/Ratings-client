import { Component, OnInit }      from '@angular/core';
import { Inject }                 from '@angular/core';
import { ElementRef }             from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl }            from '@angular/forms';
import { Validators }             from '@angular/forms';
import { RoleService }            from '../../service/role.service';
import { Role }                   from '../../model/Role';
import { MatDialogRef }           from '@angular/material';
import { MAT_DIALOG_DATA }        from '@angular/material';

@Component({
    selector: 'app-role-edit',
    templateUrl: './role-edit.component.html',
    styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {
    id: number = 0;
    label = new FormControl('', [Validators.required]);

    constructor(private route: ActivatedRoute,
                private router: Router,
                private roleService: RoleService,
                private el: ElementRef,
                public dialogRef: MatDialogRef<RoleEditComponent>,
                @Inject(MAT_DIALOG_DATA) public parentData) {
    }

    ngOnInit() {
        if (this.parentData.id) {
            this.roleService.get(this.parentData.id).subscribe((role: Role) => {
                if (role) {
                    this.id = role.id;
                    this.label.setValue(role.label);
                } else {
                    console.log(`Role with id '${this.parentData.id}' not found, returning to list`);
                    this.goBack();
                }
            });
        }

        this.el.nativeElement.getElementsByClassName('form-header')[0].style.color = 'blue';
    }

    save(): void {
        this.roleService.save({
                id: this.id ? this.id : 0,
                label: this.label.value
            }).subscribe(result => {
            this.goBack();
        }, error => console.error(error));
    }

    goBack(): void {
        this.dialogRef.close({id: this.id ? this.id : 0, label: this.label.value});
    }

    remove(id): void {
        this.roleService.remove(id).subscribe(result => {
            this.id = 0;
            this.goBack();
        }, error => console.error(error));
    }
}
