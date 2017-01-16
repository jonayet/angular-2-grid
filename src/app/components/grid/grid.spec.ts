import {GridService} from './grid.service';

describe('Grid Service Specs', () => {
    const testData = [
        {"id":1,"city":"Neftegorsk","start_date":"4/13/2013","end_date":"5/18/2013","price":"55.82","status":"Seldom","color":"#fd4e19"},
        {"id":2,"city":"Lancai","start_date":"5/19/2012","end_date":"11/29/2014","price":"22.49","status":"Yearly","color":"#ff5055"},
        {"id":3,"city":"Hekou","start_date":"8/28/2011","end_date":"4/7/2014","price":"9.48","status":"Often","color":"#903761"}
    ];

    it ('Should sort data by City by ascending order.', () => {
        const gridService = new GridService();
        const result = gridService.sortData(testData, 'city');
        expect(result[0]['city']).toBe('Hekou');
    });

    it ('Should sort data by Start Date by descending order.', () => {
        const gridService = new GridService();
        const result = gridService.sortData(testData, 'start_date', 'date', true);
        expect(result[0]['start_date']).toBe('8/28/2011');
    });

    it ('Should sort data by price by ascending order.', () => {
        const gridService = new GridService();
        const result = gridService.sortData(testData, 'price', 'number');
        expect(result[0]['price']).toBe('9.48');
    });
});