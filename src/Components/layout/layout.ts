import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit {

  private productService = inject(ProductService);
  cartItemsLength = signal<any>('');
  router = inject(Router)
  cartList = signal<any>([])
  constructor(){

  }
  ngOnInit(): void {
    this.productService.cart$.subscribe((res:any)=>{
      this.cartList.set(res)
     const length = res.length;
     this.cartItemsLength.set(length)
    })
  }
  handleCartNavigation(){
  this.router.navigate(['/cart'], {
    state : {
      cartItems:this.cartList()
    }
  }
    
  )
  }
}
