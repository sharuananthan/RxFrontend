import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-sub-table',
  templateUrl: './sub-table.component.html',
  styleUrls: ['./sub-table.component.css']
})
export class SubTableComponent implements AfterViewInit {
  searchKey! : string;
  displayedColumns: string[] = ['customerId', 'name','email','status'];
  dataSource =new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private _dialog:MatDialog) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
