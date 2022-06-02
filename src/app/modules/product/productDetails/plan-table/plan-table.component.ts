import { AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Plan } from 'src/app/data/schema/plan.model';
import { ActivatedRoute,Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { PlanService } from 'src/app/data/service/ProductPlan/plan.service';
import { Product } from 'src/app/data/schema/product.model'

@Component({
  selector: 'app-plan-table',
  templateUrl: './plan-table.component.html',
  styleUrls: ['./plan-table.component.css']
})
export class PlanTableComponent implements  OnInit {
  productId!:string;
  product!: Product ;

  dataSource = new MatTableDataSource();
  displayedColumns: String[] = ['planId',  'name','duration', 'price','description', ]
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public _activatedRoute: ActivatedRoute,public router: Router ,private planservice: PlanService)
    {this.productId = this._activatedRoute.snapshot.paramMap.get('id')||'';}
   

  ngOnInit(): void {
    this.getPlan(this.productId);
  }

  getPlan(productId:string){
    this.planservice.getPlan(productId).subscribe((data: Plan[]) => {
      this.dataSource.data = data
      //console.log(this.dataSource)

    });
  }

}
