import { DataSource }                            from '@angular/cdk/collections';
import { MatPaginator, MatSort }                 from '@angular/material';
import { map }                                   from 'rxjs/operators';
import { merge, Observable, of as observableOf } from 'rxjs';
import { User }                                  from '../../../../model/User';

export class UserListDataSource extends DataSource<User> {

    constructor(private paginator: MatPaginator,
                private sort: MatSort,
                private data: User[]) {
        super();
    }

    connect(): Observable<User[]> {
        const dataMutations = [
            observableOf(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];

        this.paginator.length = this.data.length;

        return merge(...dataMutations).pipe(map(() => {
            return this.getPagedData(this.getSortedData([...this.data]));
        }));
    }

    disconnect() {
    }

    private getPagedData(data: User[]) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }

    private getSortedData(data: User[]) {
        if (! this.sort.active || this.sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'username':
                    return compare(a.username, b.username, isAsc);
                case 'id':
                    return compare(+ a.id, + b.id, isAsc);
                default:
                    return 0;
            }
        });
    }
}

function compare(a, b, isAsc) {
    return (a < b ? - 1 : 1) * (isAsc ? 1 : - 1);
}
