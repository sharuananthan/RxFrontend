import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  revenue: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',revenue:5500},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',revenue:5500},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',revenue:5500},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',revenue:5500}
];

@Component({
  selector: 'app-sub-table',
  templateUrl: './sub-table.component.html',
  styleUrls: ['./sub-table.component.css']
})
export class SubTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','revenue'];
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
