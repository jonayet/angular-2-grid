import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
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
    data: Object[] = [];
    originalData: Object[] = [];
    private startDate;
    private endDate;

    constructor(private homeService: HomeService, private router: Router) {

    }

    ngOnInit() {
        this.homeService.getGridData().subscribe((data)=>{
            this.originalData = data;
            this.data = Object.assign(this.data, this.originalData);
        });
    }

    onStartDateChange(date: Date){
        this.startDate = date;
        this.data = this.homeService.filterData(this.originalData, this.startDate, this.endDate);
    }

    onEndDateChange(date: Date){
        this.endDate = date;
        this.data = this.homeService.filterData(this.originalData, this.startDate, this.endDate);

    }

    showForm(){
        this.router.navigate(['/user-form']);
    }
}