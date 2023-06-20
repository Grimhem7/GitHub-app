import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RepositoryListComponent } from './repo/repository-list/repository-list.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { ShortNumberPipe } from './pipes/short-number.pipe';

import { PaginationModule } from './features/page.generality/pagination.module';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
    declarations: [
        AppComponent,
        RepositoryListComponent,
        DateAgoPipe,
        ShortNumberPipe,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPaginationModule,
        PaginationModule,
        InfiniteScrollModule,
        RouterModule.forRoot([
            { path: 'list' ,  component: RepositoryListComponent}
        ])
    ]
})
export class AppModule { }
