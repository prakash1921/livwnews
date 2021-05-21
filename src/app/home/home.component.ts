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
  userlogout: boolean=false;
  userdetails: any;
constructor(public firebaseService:FirebaseService,public router:Router){}

  ngOnInit() :void{
    this.getUserDetails();
  }
  logout(){
    this.firebaseService.logout();
    this.isLogout.emit();
    this.userlogout=true;
this.router.navigateByUrl('login')

  }
  getUserDetails(){
   this.userdetails= JSON.parse(localStorage.getItem('user'));
    console.log('user',this.userdetails)
    if(this.userdetails!=null){
      console.log('user',this.userdetails.providerData[0])
      this.userName=this.userdetails.providerData[0].displayName;
      this.userimg=this.userdetails.providerData[0].photoURL;
    
     }else{
      this.userlogout=true;
     }
   }
}
