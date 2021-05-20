import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth'
import firebase from 'firebase/app';
import { ToastrManager } from 'ng6-toastr-notifications';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn=false;
  constructor(public firebaseAuth:AngularFireAuth,public toastr: ToastrManager) { }
  async signIn(email:string,password:string){
   await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then((res)=>{
      this.isLoggedIn=true;
      localStorage.setItem('user',JSON.stringify(res.user))
    return res;
    }).catch((err)=> {
      if(err.code=="auth/user-not-found"){
// this.toastr.errorToastr("","!Opps") 
this.toastr.errorToastr('User Does Not Exist.', 'Oops!');
      }
      if(err.code=="auth/wrong-password"){
        this.toastr.errorToastr('Password invalid.', 'Oops!');
      }
      // auth/wrong-password
      // return err;
    })
    
  }
  async signup(email:string,password:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
     .then((res)=>{
       this.isLoggedIn=true
       localStorage.setItem('user',JSON.stringify(res.user))
     
     })
     
   }

   async loginWithGoogle(){
     await this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
       res=>{
         return res;
       }
     ).catch(err=>{
       return err;
     })
   }

   logout(){
     this.firebaseAuth.signOut();
     localStorage.removeItem('user');
   }

    async changepassword(email){
      await this.firebaseAuth.sendPasswordResetEmail(email)
      .then((res)=>{
        this.toastr.successToastr('Email is send for rest password');
    }).catch(err=>err)
  }
}
