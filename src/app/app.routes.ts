import { Routes } from '@angular/router';
import { Product } from './pages/product/product';
import { Services } from './pages/services/services';


export const routes: Routes = [
    {
        path: 'product',
        component: Product
    },
    {
        path: 'services',
        component: Services
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
    }
];
