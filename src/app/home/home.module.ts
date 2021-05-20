import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FollowComponent } from '../follow/follow.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { HeadlinesComponent } from '../headlines/headlines.component';
import { ExploreComponent } from '../explore/explore.component';
import { ExploredetailsComponent } from '../explore/exploredetails/exploredetails.component';
import { HeadlinesDetailsComponent } from '../headlines/headlines-details/headlines-details.component';
@NgModule({
  
  imports: [
    HomeRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    NgxPaginationModule ,
  ],
  declarations: [
    HomeComponent,
    FollowComponent,
    PagenotfoundComponent,
    ExploreComponent,
    HeadlinesComponent,
    ExploredetailsComponent,
    HeadlinesDetailsComponent
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ],
})
export class HomeModule { }
