import { Component, OnInit } from '@angular/core';
import { Input }             from '@angular/core';
import { Role }              from '../../../../model/Role';
import { RoleService }       from '../../../../service/role.service';
import { ActivatedRoute }    from '@angular/router';
import { FormControl }       from '@angular/forms';
import { SecurityService }   from '../../../../service/auth/security.service';

@Component({
    selector: 'app-role-list',
    templateUrl: './role-list.component.html',
    styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
    rolesOnPage: Role[] = [];
    pageNumber: number = 0;
    pageNumbers: number[] = [];
    sortByColumn: string = 'id';
    filterPattern = new FormControl('');
    permanentRoles: string[] = [];


    @Input()
    displayedColumns: string[];

    constructor(private activatedRoute: ActivatedRoute,
        private roleService: RoleService,
        private securityService: SecurityService) {
    }

    ngOnInit() {
        this.permanentRoles = this.securityService.adminRoles.concat(this.securityService.userRoles);

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

    deleteRole(roleId: number): void {
        this.roleService.remove(roleId).subscribe(
            success => {
                this.pageNumber = 0;
                this.getRolesOnPage();
            }
        );
    }

    isRolePermanent(roleLabel: string): boolean {
        return this.permanentRoles.includes(roleLabel);
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
            }
        );
    }
}
