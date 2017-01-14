import {GridComponent} from './grid/grid.component';
import {GridService} from './grid/grid.service';
import {DateRangeComponent} from './date-range/date-range.component';

export const Components = {
    GridComponent,
    DateRangeComponent
};

export const ComponentRegistry = [
    GridComponent,
    DateRangeComponent
];

export const ComponentProviders = [
    GridService
];