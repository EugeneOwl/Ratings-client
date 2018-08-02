import { UserService }                  from '../../service/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort }        from '@angular/material';
import { UserListDataSource }           from './user-list-datasource';


@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    dataSource: UserListDataSource;
    displayedColumns = ['id', 'username', 'roles'];

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.dataSource = new UserListDataSource(this.paginator, this.sort);
        this.userService.getAll().subscribe(users => {
            this.dataSource.setData(users);
        });
    }


}