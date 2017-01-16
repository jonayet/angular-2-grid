import {TestBed, inject} from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import {HomeService} from './home.service';

describe('Home Service Specs', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                HomeService
            ]
        });
    });

    const testData = [
        {"id":1,"city":"Neftegorsk","start_date":"4/13/2013","end_date":"5/18/2013","price":"55.82","status":"Seldom","color":"#fd4e19"},
        {"id":2,"city":"Lancai","start_date":"5/19/2012","end_date":"11/29/2014","price":"22.49","status":"Yearly","color":"#ff5055"},
        {"id":3,"city":"Hekou","start_date":"8/28/2011","end_date":"4/7/2014","price":"9.48","status":"Often","color":"#903761"}
    ];

    it('Should filter data by start date.', inject([HomeService], (homeService) => {
        const date = new Date('1-1-2012');
        const filteredData = homeService.filterData(testData, date);
        expect(filteredData.length).toBe(2);
    }));

    it('Should filter data by end date.', inject([HomeService], (homeService) => {
        const date = new Date('5-20-2013');
        const filteredData = homeService.filterData(testData, null, date);
        expect(filteredData.length).toBe(1);
    }));

    it('Should filter data by start and end date.', inject([HomeService], (homeService) => {
        const startDate = new Date('5-20-2015');
        const endDate = new Date('5-20-2015');
        const filteredData = homeService.filterData(testData, startDate, endDate);
        expect(filteredData.length).toBe(0);
    }));
});