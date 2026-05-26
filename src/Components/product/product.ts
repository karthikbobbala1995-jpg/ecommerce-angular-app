import { Component, inject, OnInit, signal } from '@angular/core';
import { Api } from '../../app/Services/api';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {

  private readonly api = inject(Api);
  private readonly productService = inject(ProductService);
  private readonly router = inject(Router);
  products = signal<any>([])
  constructor(){

  }
  ngOnInit(): void {
    this.allProducts();
  }
  allProducts(){
    this.api.getAllProducts().subscribe({
      next:(res)=>{
        if(Array.isArray(res)){
        this.products.set(res)
        }
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  handleToCart(cart:any) {
   this.productService.storeCartItems(cart)
  }
  handleSingleProduct(item:any){
    this.router.navigate(['/product',item.id])
  }
}
