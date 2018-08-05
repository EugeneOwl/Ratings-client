import { Component }    from '@angular/core';
import { Output }       from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-admin-toolbar',
    templateUrl: './admin-toolbar.component.html',
    styleUrls: ['./admin-toolbar.component.css']
})
export class AdminToolbarComponent {

    @Output()
    chosenList = new EventEmitter<string>();

    constructor() {
    }

    chooseList(listName: string) {
        this.chosenList.emit(listName);
    }
}
