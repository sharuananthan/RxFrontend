import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,tap,catchError,of,map, observable } from 'rxjs';
import { Customer } from '../../schema/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly customerBaseApiUrl = 'https://localhost:44352/api/customer';

  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<Customer[]> {
    return this.httpClient.get<Customer []>(this.customerBaseApiUrl)
  }
  getCustomerDetails(customerId: string): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.customerBaseApiUrl}/${customerId}`)
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };


}
}
