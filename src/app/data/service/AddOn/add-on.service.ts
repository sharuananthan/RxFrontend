import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddOnUsage } from '../../schema/addUsage';

@Injectable({
  providedIn: 'root'
})
export class AddOnService {

  constructor(private http:HttpClient) { }

}
