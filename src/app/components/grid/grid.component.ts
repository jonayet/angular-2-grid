import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {IGridColumn} from './IGridColumn';
import {GridService} from './grid.service';

@Component({
    selector: 'grid',
    templateUrl: './grid.view.html',
    styleUrls: ['./grid.style.css']
})
export class GridComponent implements OnChanges{
    @Input() columns: IGridColumn[];
    @Input() data: any[];

    rows: any[] = [];
    orderMap: Map<string, boolean|undefined> = new Map<string, boolean|undefined>();

    constructor(private gridService : GridService) {

    }

    ngOnChanges(changes: SimpleChanges) {
        const data = changes['data'].currentValue;
        this.rows = this.gridService.sortData(data, 'color', 'color', false);
    }

    sortData(column: IGridColumn) {
        this.rows = this.gridService.sortData(this.rows, column.dataField, column.dataType, this.toggleSortOrder(column));
    }

    trackRow(index: number, item: any): number {
        return item.id;
    }

    private isDescendingOrder(column: IGridColumn): boolean {
        return this.orderMap.get(column.dataField);
    }

    private toggleSortOrder(column: IGridColumn): boolean {
        this.orderMap.set(column.dataField, !this.orderMap.get(column.dataField));
        return this.orderMap.get(column.dataField);
    }
}