import { DataSource }                            from '@angular/cdk/collections';
import { MatPaginator, MatSort }                 from '@angular/material';
import { map }                                   from 'rxjs/operators';
import { merge, Observable, of as observableOf } from 'rxjs';
import { Task }                                  from '../../model/Task';

export class TaskListDatasource extends DataSource<Task> {

    constructor(private paginator: MatPaginator, private sort: MatSort, private data: Task[]) {
        super();
    }

    connect(): Observable<Task[]> {
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

    private getPagedData(data: Task[]) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }

    private getSortedData(data: Task[]) {
        if (! this.sort.active || this.sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'id':
                    return compare(+ a.id, + b.id, isAsc);
                case 'label':
                    return compare(a.label, b.label, isAsc);
                case 'description':
                    return compare(a.description, b.description, isAsc);
                case 'evaluation':
                    return compare(+ a.evaluation, + b.evaluation, isAsc);
                case 'user':
                    return compare(+ a.user.username, + b.user.username, isAsc);
                default:
                    return 0;
            }
        });
    }
}

function compare(a, b, isAsc) {
    return (a < b ? - 1 : 1) * (isAsc ? 1 : - 1);
}
