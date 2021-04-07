import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl="https://localhost:4436/api/";

  constructor(private httpClient:HttpClient) { }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let path=this.apiUrl+ "carimages/getimagesbycarid?carId=" +carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(path);
  }
  
}
