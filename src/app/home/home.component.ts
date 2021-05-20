import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

@Output() isLogout = new EventEmitter<void>()
title = 'angularnews';
isSignedIn = false;
myForm: any = [];
invaliderr: any;
submitted = false;
emailneed: string='';
userName: any='';
userimg: any='';
constructor(public firebaseService:FirebaseService,public router:Router){}

  ngOnInit() :void{
    this.getUserDetails();
  }
  logout(){
    this.firebaseService.logout();
    this.isLogout.emit();
this.router.navigateByUrl('login')

  }
  getUserDetails(){
    var userdetails= JSON.parse(localStorage.getItem('user'));
    console.log('user',userdetails.providerData[0])
     this.userName=userdetails.providerData[0].displayName;
     this.userimg=userdetails.providerData[0].photoURL;
   }
}
