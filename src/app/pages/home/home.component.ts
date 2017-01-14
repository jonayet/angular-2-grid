import {Component} from '@angular/core';
import {IGridColumn} from '../../components/grid/IGridColumn';
import {HomeService} from './home.service';

@Component({
    selector: 'home',
    templateUrl: './home.view.html',
    styleUrls: ['./home.style.css']
})

export class HomeComponent {
    columns: IGridColumn[] = [
        {
            header: "City",
            dataField: "city"
        },
        {
            header: "Start Date",
            dataField: "start_date"
        },
        {
            header: "End Date",
            dataField: "end_date"
        },
        {
            header: "Price",
            dataField: "price"
        },
        {
            header: "Status",
            dataField: "status"
        },
        {
            header: "Color",
            dataField: "color",
            dataType: "color"
        }
    ];
    rows: any[] = [];

    constructor(private homeService: HomeService) {
         homeService.getGridData().subscribe((data)=>{
             this.rows = data;
         });
    }
}