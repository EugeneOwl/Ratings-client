import { Component, OnInit }  from '@angular/core';
import { ViewChild }          from '@angular/core';
import { RoleService }        from '../../service/role.service';
import { MatSort }            from '@angular/material';
import { MatPaginator }       from '@angular/material';
import { RoleListDataSource } from './role-list-datasource';
import { MatDialog }          from '@angular/material';
import { RoleEditComponent }  from '../role-edit/role-edit.component';

@Component({
    selector: 'app-role-list',
    templateUrl: './role-list.component.html',
    styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    dataSource: RoleListDataSource;
    displayedColumns = ['id', 'value'];

    constructor(
        private roleService: RoleService,
        private dialog: MatDialog
    ) {
    }

    ngOnInit() {
        this.roleService.getAll().subscribe(roles => {
            this.dataSource = new RoleListDataSource(
                this.paginator,
                this.sort,
                roles
            );
        });
    }

    goToEditRoleDialog(id: number): void {
        this.dialog.open(RoleEditComponent, {
                width: '500px',
                data: {id: id}
            },
        );
    }
}
