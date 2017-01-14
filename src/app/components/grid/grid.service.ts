import {Injectable} from '@angular/core';
import * as sc_color from 'sc-color';

@Injectable()
export class GridService {

    constructor(){

    }

    sortData(data: any[], fieldName: string, fieldType: string, descendingOrder: boolean = false): any[] {
        let sortedData: any = [];
        switch (fieldType){
            case 'date':
                sortedData = data.sort((rowA, rowB) => {
                    const dateA = new Date(rowA[fieldName]);
                    const dateB = new Date(rowB[fieldName]);
                    if(descendingOrder) {
                        return dateB.getTime() - dateA.getTime();
                    } else {
                        return dateA.getTime() - dateB.getTime();
                    }
                });
                break;
            case 'number':
                sortedData = data.sort((rowA, rowB) => {
                    const number1 = Number(rowA[fieldName]);
                    const number2 = Number(rowB[fieldName]);
                    if(descendingOrder) {
                        return number1 - number2;
                    } else {
                        return number2 - number1;
                    }
                });
                break;
            case 'color':
                sortedData = data.sort((rowA, rowB) => {
                    const color1 = sc_color(rowA[fieldName]).hue();
                    const color2 = sc_color(rowB[fieldName]).hue();
                    if(descendingOrder) {
                        return color1 - color2;
                    } else {
                        return color2 - color1;
                    }
                });
                break;
            default:
                sortedData = data.sort((rowA, rowB) => {
                    if(descendingOrder) {
                        return rowA[fieldName].localeCompare(rowB[fieldName]);
                    } else {
                        return rowB[fieldName].localeCompare(rowA[fieldName]);
                    }
                });
                break;
        }
        return sortedData;
    }
}