import { UserService }                  from '../../service/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Input }                        from '@angular/core';
import { MatPaginator, MatSort }        from '@angular/material';
import { MatDialog }                    from '@angular/material';
import { UserListDataSource }           from './user-list-datasource';
import { User }                         from '../../model/User';
import { forkJoin }                     from 'rxjs';


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
    usernameButtonLink: string;

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
            data: {id: id, currentUserId: 1} // TODO: dehardcode current user
        });
        this.updateComponentPieceAccordingDialog(dialogRef);
    }

    private updateComponentPieceAccordingDialog(dialogRef): void {
        dialogRef.afterClosed().subscribe(result => {
            if (!result) {

                return;
            }
            this.users.filter(user => user.id == result.user.id)
            .map(user => user.roles = result.user.roles);
        });
    }
}
