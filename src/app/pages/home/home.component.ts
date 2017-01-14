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
    originalData: any[] = [];

    constructor(private homeService: HomeService) {

    }

    ngOnInit() {
        this.homeService.getGridData().subscribe((data)=>{
            this.originalData = data;
            this.data = this.originalData.map((d) => {
                return d;
            });
        });
    }

    onStartDateChange(date: Date){
        this.data = this.originalData.filter(function (row) {
            let startDate = new Date(row['start_date']);
            return startDate > date;
        });
    }

    onEndDateChange(date: Date){
        this.data = this.originalData.filter(function (row) {
            let endDate = new Date(row['start_date']);
            return endDate < date;
        });
    }
}