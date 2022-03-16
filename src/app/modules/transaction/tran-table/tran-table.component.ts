import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
export interface PeriodicElement {
  date: number;
  transactionID: string;
  subscriptionID: number;
  transactionStatus: string;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: 1,transactionID: 'A',subscriptionID: 1.0079, transactionStatus: 'H',amount:5500},
  {date: 2,transactionID: 'B', subscriptionID: 4.0026, transactionStatus: 'He',amount:5500},
  {date: 3,transactionID: 'C', subscriptionID: 6.941, transactionStatus: 'Li',amount:5500},
  {date: 4,transactionID: 'D', subscriptionID: 9.0122, transactionStatus: 'Be',amount:5500}
];

@Component({
  selector: 'app-tran-table',
  templateUrl: './tran-table.component.html',
  styleUrls: ['./tran-table.component.css']
})

export class TranTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['date', 'transactionID', 'subscriptionID', 'transactionStatus','amount'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private _liveAnnouncer: LiveAnnouncer,private _dialog:MatDialog) { }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
      if (sortState.direction) {
        this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      } else {
        this._liveAnnouncer.announce('Sorting cleared');
      }
    }
    openDialog(row: PeriodicElement) {
      console.log('Row clicked', row);
      const dialog = this._dialog.open(DialogComponent, {
        width: '450px',
        height: '500px',
        // Can be closed only by clicking the close button
        data: row
      });
    }


}
