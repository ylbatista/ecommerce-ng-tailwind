import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products-list',
        pathMatch: 'full'
    },
    {
        path: 'products-list',
        title: 'List',
        loadComponent: () => import('./pages/products-list/products-list.component'),
    },

    {
        path: 'product-details',
        title: 'Details',
        loadComponent: () => import('./pages/product-details/product-details.component'),
    },

    {
        path: 'PageNotFound',
        title: 'Not Found',
        loadComponent: () => import('./pages/not-found/not-found.component'),
    },

    {
        path: '**', redirectTo: 'PageNotFound'
    },
];
