import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentRegistry, ComponentProviders } from './components/index';
import { PageRegistry, PageProviders } from './pages/index';
import { routes } from './app.router';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ...ComponentRegistry,
        ...PageRegistry
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        ...ComponentProviders,
        ...PageProviders
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }