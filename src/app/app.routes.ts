import { Routes } from '@angular/router';
import { Layout } from '../Components/layout/layout';
import { Product } from '../Components/product/product';
import { Cart } from '../Components/cart/cart';
import { ProductList } from '../Components/product-list/product-list';

export const routes: Routes = [
     {
        path:'',component:Layout,
        children:[
            {
                path:'',
                component:Product
            },
            {
              path:'product/:id',
              component:ProductList
            },
            {
                path:'cart',
                component:Cart
            }
        ]
     },
     
];
