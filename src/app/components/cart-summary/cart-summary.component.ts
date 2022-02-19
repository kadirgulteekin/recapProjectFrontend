import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetails } from 'src/app/models/cardetails';
import { CartItem } from 'src/app/models/cartitem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[];

  constructor(private cartService:CartService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.getCart();

  }

  getCart(){
    this.cartItems=this.cartService.list();
  }

  removeFromCart(cardetails:CarDetails){
   this.cartService.removeFromCart(cardetails);
   this.toastrService.error("Silindi",cardetails.description) 
  }

}
