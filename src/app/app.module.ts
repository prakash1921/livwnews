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
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ExploredetailsComponent } from './explore/exploredetails/exploredetails.component';
import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';
// import { CommonModule } from '@angular/common';
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

    BrowserAnimationsModule,
    ToastrModule.forRoot() ,
    NgxPaginationModule ,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyDpIgXXk7t09gBclR-qYyqp1A-F_HFCQR4",
      authDomain: "news-c3236.firebaseapp.com",
      projectId: "news-c3236",
      storageBucket: "news-c3236.appspot.com",
      messagingSenderId: "552334450318",
      appId: "1:552334450318:web:c02781424ce4aa4d3773df",
      measurementId: "G-46LN3B095C"
    }),
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ],
 providers:[AngularFireAuth,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
