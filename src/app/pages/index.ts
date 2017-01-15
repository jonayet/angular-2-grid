import {HomeComponent} from './home/home.component';
import {HomeService} from './home/home.service';
import {UserFormComponent} from './user-form/user-form.component';

export const Pages = {
    HomeComponent,
    UserFormComponent
};

export const PageRegistry = [
    HomeComponent,
    UserFormComponent
];

export const PageProviders = [
    HomeService
];