import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {

  router = inject(Router);
  cartList = signal<any>([])
  constructor() {
 const cartData = history.state.cartItems;

  console.log(cartData);
  this.cartList.set(cartData)
  }
  ngOnInit(): void {
  }
  handleRemoveProduct(item:any){
    const updateCart = this.cartList().filter((product:any)=> product.id !== item.id)
    this.cartList.set(updateCart)
  }
}
