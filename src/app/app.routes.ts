import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/list/list.component').then(c => c.ListComponent)
  }
];
