import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  revenue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: "2/2/2022", name: 'apple123@gmail.com', weight: "Enadoc", symbol: '5/5/2022',revenue:"5500$"},
  {position: "5/2/2021", name: 'orange@yahoo.com', weight: "Flowdoh", symbol: '5/5/2022',revenue:"5500$"},
  {position: "4/3/2022", name: 'carrot@outlook.com', weight: "Enadoc", symbol: '5/5/2022',revenue:"5500$"},
  {position: "4/5/2022", name: 'aspen@live.com', weight: "Flowdoh", symbol: '5/5/2022',revenue:"5500$"}
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
