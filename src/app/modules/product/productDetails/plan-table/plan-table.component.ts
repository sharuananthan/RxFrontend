import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Plan } from 'src/app/data/schema/plan.model'

@Component({
  selector: 'app-plan-table',
  templateUrl: './plan-table.component.html',
  styleUrls: ['./plan-table.component.css']
})
export class PlanTableComponent implements OnInit {

  dataSource = new MatTableDataSource<Plan>();
  displayedColumns: String[] = ['planId',  'name','duration', 'price','description', ]

  constructor() { }

  ngOnInit(): void {
  }

}
