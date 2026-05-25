import { Routes } from '@angular/router';
import { Layout } from '../Components/layout/layout';
import { Product } from '../Components/product/product';
import { Cart } from '../Components/cart/cart';

export const routes: Routes = [
     {
        path:'',component:Layout,
        children:[
            {
                path:'',
                component:Product
            },
            {
                path:'cart',
                component:Cart
            }
        ]
     },
     
];
