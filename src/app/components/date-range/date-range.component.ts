import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'date-range',
    templateUrl: './date-range.view.html',
    styleUrls: ['./date-range.style.css']
})

export class DateRangeComponent {
    @Output() onStartDateChange = new EventEmitter<Date>();
    @Output() onEndDateChange = new EventEmitter<Date>();
    startDateString: string = '';
    endDateString: string = '';

    constructor() {

    }

    _onStartDateChange(date){
        this.onStartDateChange.emit(new Date(date));
    }

    _onEndDateChange(date){
        this.onEndDateChange.emit(new Date(date));
    }
}