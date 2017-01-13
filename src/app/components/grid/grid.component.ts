import {Component} from '@angular/core';

@Component({
    selector: 'grid',
    templateUrl: './grid.view.html',
    styleUrls: ['./grid.style.css']
})
export class GridComponent {
    content: string = 'Grid';
    constructor() {

    }
}