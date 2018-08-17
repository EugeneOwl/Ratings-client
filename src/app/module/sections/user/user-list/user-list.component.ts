import { Component, OnInit, ViewChild } from '@angular/core';
import { Input }                        from '@angular/core';
import { MatPaginator, MatSort }        from '@angular/material';
import { UserListDataSource }           from './user-list-datasource';
import { forkJoin }                     from 'rxjs';
import { UserService }                  from '../../../../service/user.service';
import { User }                         from '../../../../model/User';
import { ActivatedRoute }               from '@angular/router';

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
    displayedColumns: string[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private userService: UserService,
    ) {
    }

    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.displayedColumns = data.displayedColumns;
        });

        forkJoin(this.userService.getAll()).subscribe(data => {
            this.users = data[0];
            this.dataSource = new UserListDataSource(
                this.paginator,
                this.sort,
                this.users
            );
        });
    }
}
