import {MenuComponent} from './menu/menu.component';
import {MenuService} from './menu/menu.service';
import {GridComponent} from './grid/grid.component';

export const Components = {
    MenuComponent,
    GridComponent
};

export const ComponentRegistry = [
    MenuComponent,
    GridComponent
];

export const ComponentProviders = [
    MenuService
];