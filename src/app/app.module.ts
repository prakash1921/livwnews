import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import { HomeComponent } from './home/home.component'
import { FirebaseService } from './services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExploreComponent } from './explore/explore.component';
import { FollowComponent } from './follow/follow.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ExploredetailsComponent } from './explore/exploredetails/exploredetails.component';
import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';
import { Http, HttpModule } from '@angular/http';
import { AuthGuard } from './auth.guard';
import axios from 'axios';
// import { CommonModule } from '@angular/common';
import {environment} from  '../environments/environment'
@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // FollowComponent,
    // PagenotfoundComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
HttpModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() ,
    NgxPaginationModule ,
    AngularFireModule.initializeApp( environment.firebase),
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ],
 providers:[AngularFireAuth,FirebaseService,AuthGuard,{provide: HttpClient, useValue: axios}],
  bootstrap: [AppComponent]
})
export class AppModule { }
