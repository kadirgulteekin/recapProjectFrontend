import { Injectable } from '@angular/core';
import { CarDetails } from '../models/cardetails';
import { CartItem } from '../models/cartitem';
import { CartItems } from '../models/cartitems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  addToCart(cardetails:CarDetails){
    let item = CartItems.find(c=>c.cardetails.carId===cardetails.carId);
    if(item){
      item.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.quantity =1;
      cartItem.cardetails=cardetails;
      CartItems.push(cartItem)
    }
  }

 
  removeFromCart(cardetails:CarDetails){
    let item:CartItem = CartItems.find(c=>c.cardetails.carId===cardetails.carId);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }

}
