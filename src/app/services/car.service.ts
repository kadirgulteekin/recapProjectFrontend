import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetails } from '../models/cardetails';
import { DetailResponseModel } from '../models/detailResponse';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44308/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetails>>{
    let newPath =this.apiUrl + "cars/getcardetails" 
   return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);  
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath =this.apiUrl + "cars/getcarsbybrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);    
   }

   getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath =this.apiUrl + "cars/getcarsbycolor?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);    
   }

   getCarDetails(): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl+ 'cars/getcardetails'
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarDetailById(id:number): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl+ 'cars/getcardetailby?id=' + id;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
  getCarDetailsByBrandId(id: number): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'cars/getcarsbybrand?brandid=' + id;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarDetailsByColorId(id: number): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'cars/getcarsbycolor?colorId=' + id;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarDetailsByBrandAndColorId(brandId:number, colorId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + 'cars/getcardetailsbybrandandcoloribrandId='+ brandId + '&colorId=' +colorId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
}
// cars/getcarsbybrand?brandid=3002