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
    @Input() data: Object[];

    rows: Object[] = [];
    orderMap: Map<string, boolean|undefined> = new Map<string, boolean|undefined>();

    constructor(private gridService : GridService) {

    }

    ngOnChanges(changes: SimpleChanges) {
        const data = changes['data'];
        if(data) {
            this.rows = data.currentValue;
        }
    }

    sortData(column: IGridColumn) {
        this.rows = this.gridService.sortData(this.rows, column.dataField, column.dataType, this.toggleSortOrder(column));
    }

    trackRow(index: number, item: any): number {
        return item.id;
    }

    isDescendingOrder(column: IGridColumn): boolean {
        return this.orderMap.get(column.dataField);
    }

    private toggleSortOrder(column: IGridColumn): boolean {
        const lastOrder = this.isDescendingOrder(column);
        this.orderMap.set(column.dataField, !lastOrder);
        return lastOrder;
    }
}