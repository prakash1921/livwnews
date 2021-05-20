import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
// import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: any = [];
  submitted = false;
  emailneed: string='';
  userName: any='';
  userimg: any='';
  constructor(public firebaseService: FirebaseService,
    public route: Router, public fb: FormBuilder,public router:Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      'email': new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
    this.getUserDetails();
  }
  getUserDetails(){
    var userdetails= JSON.parse(localStorage.getItem('user'));
    if(userdetails!=undefined){
      console.log('user',userdetails.providerData[0])
      this.userName=userdetails.providerData[0].displayName;
      this.userimg=userdetails.providerData[0].photoURL;
    }
  
   }

   async onSignup() {
    var password = this.myForm.value.password;
    var email = this.myForm.value.email
    await this.firebaseService.signup(email, password)
   }

   async onSignin() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.myForm.invalid) {
      return;
    }
    var password = this.myForm.value.password;
    var email = this.myForm.value.email
    await this.firebaseService.signIn(email, password);

    if (this.firebaseService.isLoggedIn){
      this.getUserDetails();
      this.router.navigateByUrl('home')
    }
     


  }

  get f() { return this.myForm.controls; }


  async googlesignin() {

    await this.firebaseService.loginWithGoogle()


  }
  async forgetpassword() {
    var email = this.myForm.value.email;
   var regexp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    test = regexp.test(email);
    if(this.myForm.value.email!='' && test==true){
      await this.firebaseService.changepassword(email)
    }
    
  else{
    this.emailneed="Email Required"
  }



  }
}
