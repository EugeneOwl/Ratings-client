import { UserService }                  from '../../service/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Input }                        from '@angular/core';
import { MatPaginator, MatSort }        from '@angular/material';
import { MatDialog }                    from '@angular/material';
import { UserListDataSource }           from './user-list-datasource';
import { UserEditComponent }            from '../user-edit/user-edit.component';
import { UserDetailsComponent }         from '../user-details/user-details.component';


@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    dataSource: UserListDataSource;

    @Input()
    displayedColumns: string;

    @Input()
    usernameButtonLink: string;

    @Input()
    childDialogComponentClassName;

    constructor(
        private userService: UserService,
        private dialog: MatDialog
    ) {
    }

    ngOnInit() {
        this.userService.getAll().subscribe(users => {
            this.dataSource = new UserListDataSource(
                this.paginator,
                this.sort,
                users
            );
        });
    }

    goToPersonalUserDialog(id: number): void {
        this.dialog.open(this.childDialogComponentClassName, {
                width: '800px',
                data: {id: id}
            },
        );
    }
}
