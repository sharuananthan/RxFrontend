import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcsription-details',
  templateUrl: './subcsription-details.component.html',
  styleUrls: ['./subcsription-details.component.css']
})
export class SubcsriptionDetailsComponent implements OnInit {
  subscriptionId!:string;
  constructor(private _activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.subscriptionId= this._activatedRoute.snapshot.paramMap.get('id')||'';
    console.log(this.subscriptionId)
  }



}
