import { Routes } from '@angular/router';
import { Product } from './pages/product/product';
import { Services } from './pages/services/services';
import { Nosotros } from './pages/nosotros/nosotros';


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
        path: 'nosotros',
        component: Nosotros
    },


    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
    }
];
