import { Component, OnInit }      from '@angular/core';
import { Inject }                 from '@angular/core';
import { FormControl }            from '@angular/forms';
import { Validators }             from '@angular/forms';
import { RoleService }            from '../../service/role.service';
import { Role }                   from '../../model/Role';
import { MatDialogRef }           from '@angular/material';
import { MAT_DIALOG_DATA }        from '@angular/material';
import { PersonalRoleDialogData } from '../role-list/role-list.component';

@Component({
    selector: 'app-role-edit',
    templateUrl: './role-edit.component.html',
    styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {
    id: number = 0;
    label = new FormControl('', [Validators.required]);

    constructor(private roleService: RoleService,
                public dialogRef: MatDialogRef<RoleEditComponent>,
                @Inject(MAT_DIALOG_DATA) public data: PersonalRoleDialogData) {
    }

    ngOnInit() {
        if (this.data.id) {
            this.roleService.get(this.data.id).subscribe(
                (success: Role) => {
                    this.id = success.id;
                    this.label.setValue(success.label);
                },
                error => {
                    console.log(error);
                    this.goBack();
                }
            );
        }
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
