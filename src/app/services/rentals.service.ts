import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44308/api/rentals/getcarrentdetail";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<RentalResponseModel>{
   return this.httpClient.get<RentalResponseModel>(this.apiUrl)    
  }
}
