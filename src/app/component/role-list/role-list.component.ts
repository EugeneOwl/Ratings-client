import { Component, OnInit }  from '@angular/core';
import { ViewChild }          from '@angular/core';
import { RoleService }        from '../../service/role.service';
import { MatSort }            from '@angular/material';
import { MatPaginator }       from '@angular/material';
import { MatDialog }          from '@angular/material';
import { RoleListDataSource } from './role-list-datasource';
import { RoleEditComponent }  from '../role-edit/role-edit.component';
import { forkJoin }           from 'rxjs';
import { Role }               from '../../model/Role';

@Component({
    selector: 'app-role-list',
    templateUrl: './role-list.component.html',
    styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    roles: Role[];
    dataSource: RoleListDataSource;
    displayedColumns = ['id', 'label'];

    constructor(
        private roleService: RoleService,
        private dialog: MatDialog
    ) {
    }

    ngOnInit() {
        forkJoin(this.roleService.getAll()).subscribe(data => {
            this.roles = data[0];
            this.dataSource = new RoleListDataSource(
                this.paginator,
                this.sort,
                this.roles
            );
        });
    }

    goToEditRoleDialog(id: number): void {
        const dialogRef = this.dialog.open(RoleEditComponent, {
            width: '500px',
            data: {id: id}
        });
        this.updateComponentPieceAccordingDialog(dialogRef);
    }

    private updateComponentPieceAccordingDialog(dialogRef): void {
        dialogRef.afterClosed().subscribe(result => {
            if (this.roles.filter(role => role.id == result.id).length == 0) {
                this.ngOnInit();

                return;
            }
            this.roles.filter(role => role.id == result.id)
            .map(role => role.label = result.label);
        });
    }
}

export interface PersonalRoleDialogData {
    id: any;
}