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
}