import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-tran-table',
  templateUrl: './bill-table.component.html',
  styleUrls: ['./bill-table.component.css']
})

export class BillTableComponent implements AfterViewInit {
  searchKey! : string;
  displayedColumns: string[] = ['customerId', 'name','email','status'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private _dialog:MatDialog) { }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

    /** Announce the change in sort state for assistive technology. */

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
