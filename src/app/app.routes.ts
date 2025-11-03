import { Routes } from '@angular/router';
import { First } from '../components/first/first';
import { Second } from '../components/second/second';
import { Accueil } from '../components/accueil/accueil';

export const routes: Routes = [
  {
    path: '',
    component: Accueil,
  },
  {
    path: 'first',
    component: First,
  },
  {
    path: 'second',
    component: Second,
  },
];
