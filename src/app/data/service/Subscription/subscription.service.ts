import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { CustomerSubscription } from '../../schema/cutomerSubscriptions';
import { Subscription } from '../../schema/subcription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  readonly subscriptionBaseApiUrl = 'https://localhost:44352/api/subscription';

  constructor(private httpClient:HttpClient) { }

  getAllSubscriptions():Observable<Subscription[]>{
    return this.httpClient.get<Subscription[]>(`${this.subscriptionBaseApiUrl}`)
  }

  getCustomerSubscriptions(id: string): Observable<CustomerSubscription[]> {
    console.log(id);
    return this.httpClient.get<CustomerSubscription[]>(`${this.subscriptionBaseApiUrl}/customer/${id}`)

  }

}
