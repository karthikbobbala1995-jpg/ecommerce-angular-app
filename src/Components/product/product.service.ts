import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ProductService {
    cartItems$ = new BehaviorSubject<any>([]);
    cart$ = this.cartItems$.asObservable();
    

    storeCartItems(carts:any){
        const currentItems = this.cartItems$.value;
        const updatedItems =  [...currentItems, carts];
     this.cartItems$.next(updatedItems)
    }
}