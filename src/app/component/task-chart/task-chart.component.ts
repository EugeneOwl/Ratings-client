import { Component, OnInit }      from '@angular/core';
import { PersonalRoleDialogData } from '../role-list/role-list.component';
import { RoleEditComponent }      from '../role-edit/role-edit.component';
import { MatDialogRef }           from '@angular/material';
import { Inject }                 from '@angular/core';
import { MAT_DIALOG_DATA }        from '@angular/material';

@Component({
  selector: 'app-task-chart',
  templateUrl: './task-chart.component.html',
  styleUrls: ['./task-chart.component.css']
})
export class TaskChartComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RoleEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PersonalRoleDialogData) { }

  ngOnInit() {
  }

}
