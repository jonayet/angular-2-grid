import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class HomeService {
    constructor(private http: Http){

    }

    getGridData(): Observable<Object[]> {
        return this.http.request('src/data.json')
            .map(res => res.json());
    }

    filterData(src: Object[], startDate: Date, endDate: Date){
        return src.filter(function (row) {
            let rowStartDate = new Date(row['start_date']);
            let rowEndDate = new Date(row['end_date']);
            let result = true;
            if(startDate){
                result = result && rowStartDate >= startDate;
            }
            if(endDate){
                result = result && rowEndDate <= endDate;
            }
            return result;
        });
    }
}