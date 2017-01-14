import {Component, OnInit} from '@angular/core';
import {IGridColumn} from '../../components/grid/IGridColumn';
import {HomeService} from './home.service';

@Component({
    selector: 'home',
    templateUrl: './home.view.html',
    styleUrls: ['./home.style.css']
})

export class HomeComponent implements OnInit{
    columns: IGridColumn[] = [
        {
            header: "City",
            dataField: "city"
        },
        {
            header: "Start Date",
            dataField: "start_date",
            dataType: "date"
        },
        {
            header: "End Date",
            dataField: "end_date",
            dataType: "date"
        },
        {
            header: "Price",
            dataField: "price",
            dataType: "number"
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
    data: any[] = [];

    constructor(private homeService: HomeService) {

    }

    ngOnInit() {
        this.homeService.getGridData().subscribe((data)=>{
            this.data = data;
        });
    }
}