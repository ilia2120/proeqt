import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'home',
    loadComponent: () => import('./features/home/home.component'),
  },
  {
    path: 'about',
    title: 'ebout',
    loadComponent: () => import('./features/about/about.component'),
  },
  {
    path: 'contact',
    title: 'contact',
    loadComponent: () => import('./features/contact/contact.component'),
  },
  {
    path: 'result',
    title: 'result',
    loadComponent: () => import('./features/result/result.component'),
    loadChildren: () => [
      {
        path: ':id/:id',
        title: 'resilts',
        loadComponent: () =>
          import('./features/result/results/results.component'),
      },
    ],
  },
  {
    path: '404',
    title: 'Not found',
    loadComponent: () => import('./features/not-found/not-found.component'),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  },
];
