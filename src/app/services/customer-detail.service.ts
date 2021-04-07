import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetail } from '../models/customerDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {

  apiUrl='https://localhost:44366/api/customers/getcustomerdetails';

  constructor(private httpClient:HttpClient) { }
  getCustomerDetails():Observable<ListResponseModel<CustomerDetail>>{
    return this.httpClient.get<ListResponseModel<CustomerDetail>>(this.apiUrl);
  }
}
