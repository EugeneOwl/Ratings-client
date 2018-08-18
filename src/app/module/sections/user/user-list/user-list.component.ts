import { Component, OnInit } from '@angular/core';
import { Input }             from '@angular/core';
import { UserService }       from '../../../../service/user.service';
import { User }              from '../../../../model/User';
import { ActivatedRoute }    from '@angular/router';
import { FormControl }       from '@angular/forms';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    private usersOnPage: User[] = [];
    private pageNumber: number = 0;
    private pageNumbers: number[] = [];
    private sortByColumn: string = 'id';
    filterPattern = new FormControl('');


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
        this.getUsersOnPage();
    }

    setPage(number: number): void {
        this.pageNumber = number;
        this.getUsersOnPage();
    }

    setSortColumn(sortColumn: string): void {
        this.sortByColumn = sortColumn;
        this.getUsersOnPage();
    }

    isActiveColor(sortColumn: string): string {
        return sortColumn === this.sortByColumn ? 'accent' : '';
    }

    executeSearch() {
        this.pageNumber = 0;
        this.getUsersOnPage();
    }

    private getUsersOnPage() {
        this.userService.getPage(
            this.pageNumber,
            this.sortByColumn,
            this.filterPattern.value
        ).subscribe(
            (success: User[]) => {
                this.usersOnPage = success['content'];
                this.pageNumbers = new Array(success['totalPages']);
            },
            error => {
                console.log(error);
            }
        );
    }
}
