import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { BillService } from 'src/app/data/service/Bill/bill.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-tran-table',
  templateUrl: './bill-table.component.html',
  styleUrls: ['./bill-table.component.css']
})

export class BillTableComponent implements AfterViewInit,OnInit {
  searchKey! : string;
  displayedColumns: string[] = ['email', 'name','generatedDate','amount'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private _dialog:MatDialog,private _billService:BillService) { }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getBills();
  }

  getBills(){
    this._billService.getAllBills().subscribe(
      data => {
        this.dataSource.data = data;
        console.log(data);
      }
    );
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
