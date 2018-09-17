import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { SaviorsComponent } from './saviors/saviors.component';
import { SaviorDetailComponent } from './savior-detail/savior-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaviorSearchComponent } from './savior-search/savior-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SaviorsComponent,
    SaviorDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SaviorSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
