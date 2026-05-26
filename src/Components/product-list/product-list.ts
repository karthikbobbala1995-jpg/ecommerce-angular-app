import { Component,inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../../app/Services/api';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit{
  private readonly router = inject(ActivatedRoute);
  private readonly apiService = inject(Api);
  product = signal<any>('');
  private productService = inject(ProductService);
  constructor() {

  }
  ngOnInit(): void {
    this.router.params.subscribe((res)=>{
      this.getProductById(res['id'])
    })
  }
  getProductById(id:any){
    this.apiService.productById(id).subscribe({
      next:((res:any)=>{
        if(res){
        this.product.set(res)
        }
      })
    })
  }
  handleToCart(item:any){
   this.productService.storeCartItems(item)
  }
}
