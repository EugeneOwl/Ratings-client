import { Component, OnInit } from '@angular/core';
import { Input }             from '@angular/core';
import { Role }              from '../../../../model/Role';
import { RoleService }       from '../../../../service/role.service';
import { ActivatedRoute }    from '@angular/router';
import { FormControl }       from '@angular/forms';

@Component({
    selector: 'app-role-list',
    templateUrl: './role-list.component.html',
    styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
    private rolesOnPage: Role[] = [];
    private pageNumber: number = 0;
    private pageNumbers: number[] = [];
    private sortByColumn: string = 'id';
    filterPattern = new FormControl('');


    @Input()
    displayedColumns: string[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private roleService: RoleService,
    ) {
    }

    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.displayedColumns = data.displayedColumns;
        });
        this.getRolesOnPage();
    }

    setPage(number: number): void {
        this.pageNumber = number;
        this.getRolesOnPage();
    }

    setSortColumn(sortColumn: string): void {
        this.sortByColumn = sortColumn;
        this.getRolesOnPage();
    }

    isActiveColor(sortColumn: string): string {
        return sortColumn === this.sortByColumn ? 'primary' : '';
    }

    executeSearch() {
        this.pageNumber = 0;
        this.getRolesOnPage();
    }

    private getRolesOnPage() {
        this.roleService.getPage(
            this.pageNumber,
            this.sortByColumn,
            this.filterPattern.value
        ).subscribe(
            (success: Role[]) => {
                this.rolesOnPage = success['content'];
                this.pageNumbers = new Array(success['totalPages']);
            },
            error => {
                console.log(error);
            }
        );
    }
}
