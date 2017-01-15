import { Routes } from '@angular/router';
import { Pages } from './pages/index';

export const routes: Routes = [
    { path: '',  component: Pages.HomeComponent },
    { path: 'user-form',  component: Pages.UserFormComponent },
    { path: '**', component: Pages.HomeComponent }
];