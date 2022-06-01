import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { Plan } from 'src/app/data/schema/plan.model'


@Component({
  selector: 'app-marketplace-product-detail',
  templateUrl: './marketplace-product-detail.component.html',
  styleUrls: ['./marketplace-product-detail.component.css']
})

export class MarketplaceProductDetailComponent implements OnInit {

  dataSource = new MatTableDataSource<Plan>();
  displayedColumns: String[] = ['planId',  'name','price' ]



 product:string='Flowdoh';
 organization:string='Enadoc';


  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;


  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
