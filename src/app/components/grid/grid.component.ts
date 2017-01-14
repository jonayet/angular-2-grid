import {Component, Input} from '@angular/core';
import {IGridColumn} from './IGridColumn';

@Component({
    selector: 'grid',
    templateUrl: './grid.view.html',
    styleUrls: ['./grid.style.css']
})
export class GridComponent {
    @Input() rows: any[];
    @Input() columns: IGridColumn[];

    constructor() {

    }

    trackRow(index: number, item: any): number {
        return item.id;
    }
}