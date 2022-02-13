import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetails } from 'src/app/models/cardetails';
import { Color } from 'src/app/models/color';
import { Rental } from 'src/app/models/rental';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { RentalService } from 'src/app/services/rentals.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  // cars:Car[] = [];
  cardetails:CarDetails[]=[];
  dataLoaded=false;
  brands: Brand[];
  colors: Color[];
  rentals:Rental[];
  filterText = '';
  brandId: number = 0;
  colorId: number = 0;
  


  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private brandService: BrandService,
    private colorService: ColorService,
    private rentalService:RentalService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params['brandId']){
        this.getCarDetailsByBrandId(params['brandId'])
      }else if(params['colorId']){
        this.getCarDetailsByColorId(params['colorId']) 
      }
      else{
        this.getCars()
      }
    });
    this.getBrands();
    this.getColors();
    this.getRentals();
  
  }


  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cardetails=response.data
      this.dataLoaded=true;
    });
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cardetails=response.data
      console.log(response)
      this.dataLoaded=true;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded=true;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cardetails=response.data
      this.dataLoaded=true;
    });
  }


  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded=true;
    });
  }


  getCarDetailsByBrandId(brandId: number) {
    this.carService.getCarDetailsByBrandId(brandId).subscribe((response) => {
      this.cardetails = response.data;
      
      console.log(response);
      
      this.dataLoaded=true;

    
    });
  }

  getCarDetailsByColorId(colorId: number) {
    this.carService.getCarDetailsByColorId(colorId).subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded=true;
    });
  }

  getCarsByBrandAndColorId(brandId: number, colorId: number) {
    if (brandId == 0 && colorId == 0) {
      this.getCarDetails();
      return;
    }
    if (brandId == 0) {
      this.getCarDetailsByColorId(colorId);
      return;
    }
    if (colorId == 0) {
      this.getCarDetailsByBrandId(brandId);
      return;
    }
    this.carService
      .getCarDetailsByBrandAndColorId(brandId, colorId)
      .subscribe((response) => {
        this.cardetails = response.data;
        this.dataLoaded=true;
      });
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals = response.data;
    })
  }


  addToCart(cardetails:CarDetails){
    this.toastrService.success("Sepete Eklendi",cardetails.description)

  }




  
 
}