import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerSubscription } from '../../schema/cutomerSubscriptions';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  readonly subscriptionBaseApiUrl = 'https://localhost:44352/api/subscription/customer';

  constructor(private httpClient:HttpClient) { }



  getCustomerSubscriptions(id: string): Observable<CustomerSubscription[]> {
    console.log(id);
    return this.httpClient.get<CustomerSubscription[]>(`${this.subscriptionBaseApiUrl}/${id}`)

  }

}
