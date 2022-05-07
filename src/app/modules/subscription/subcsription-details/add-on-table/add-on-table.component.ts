import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'src/app/data/schema/subcription';
import { SubscriptionService } from 'src/app/data/service/Subscription/subscription.service';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-add-on-table',
  templateUrl: './add-on-table.component.html',
  styleUrls: ['./add-on-table.component.css']
})
export class AddOnTableComponent implements OnInit {

  searchKey! : string;
  subscriptions:Subscription[]=[];
  displayedColumns: string[] = ['subscriptionId','customerName','product','plan','createdDate','endDate','status'];
  dataSource =new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private _dialog:MatDialog,private _subscriptionService:SubscriptionService) { }
  ngOnInit(): void {
    this.getSubscriptions();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getSubscriptions(){
    this._subscriptionService.getAllSubscriptions().subscribe(data=>{
      this.subscriptions=data;
      this.dataSource.data=this.subscriptions;
  })
}

  openDialog(row:any) {
    console.log('Row clicked', row);
    const dialog = this._dialog.open(DialogComponent, {
      width: '450px',
      height: '500px',
      // Can be closed only by clicking the close button
      data: row
    });
  }
}
