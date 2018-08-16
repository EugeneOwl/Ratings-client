import { Component, OnInit, ViewChild } from '@angular/core';
import { Input }                        from '@angular/core';
import { MatPaginator, MatSort }        from '@angular/material';
import { MatDialog }                    from '@angular/material';
import { UserListDataSource }           from './user-list-datasource';
import { forkJoin }                     from 'rxjs';
import { UserService }                  from '../../../../service/user.service';
import { User }                         from '../../../../model/User';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    dataSource: UserListDataSource;
    users: User[];

    @Input()
    displayedColumns: string;

    @Input()
    childDialogComponentClassName;

    constructor(
        private userService: UserService,
        private dialog: MatDialog
    ) {
    }

    ngOnInit() {
        forkJoin(this.userService.getAll()).subscribe(data => {
            this.users = data[0];
            this.dataSource = new UserListDataSource(
                this.paginator,
                this.sort,
                this.users
            );
        });
    }

    goToPersonalUserDialog(id: number): void {
        const dialogRef = this.dialog.open(this.childDialogComponentClassName, {
            width: '550px',
            data: {
                id: id,
                currentUserId: JSON.parse(localStorage.getItem('user')).id
            }
        });
        dialogRef.afterClosed().subscribe(res => this.ngOnInit());
    }
}

export interface PersonalUserDialogData {
    id: any;
    currentUserId: any;
}
