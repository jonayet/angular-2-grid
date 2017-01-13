import {Injectable} from '@angular/core';

@Injectable()
export class MenuService {

    constructor(){

    }

    getMenu(): string {
        return 'menu-1';
    }
}