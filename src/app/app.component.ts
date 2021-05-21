import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
// import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularnews';
  isSignedIn = false;
  myForm: any = [];
  invaliderr: any;
  submitted = false;
  emailneed: string='';
  userName: any='';
  userimg: any='';
  userdetails: any;
  // constructor(public firebaseService:FirebaseService,public route: Router, public fb: FormBuilder,public toastr: ToastrManager){}
  constructor(public firebaseService: FirebaseService,
    public route: Router, public fb: FormBuilder,public router:Router) { }
    userlogout: boolean=false;
  ngOnInit() {
    this.myForm = this.fb.group({
      'email': new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
    if (localStorage.getItem('user') != null)
      this.isSignedIn = true
    else
      this.isSignedIn = false

      this.getUserDetails();
  }
  async onSignup() {
    var password = this.myForm.value.password;
    var email = this.myForm.value.email
    await this.firebaseService.signup(email, password)
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true
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
      this.isSignedIn = true;
      this.getUserDetails();
    }
     


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
 async  logout() {
    await this.firebaseService.logout();
    this.userdetails=undefined;
    this.userlogout=true;
    this.router.navigateByUrl('login')
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

// https://stackblitz.com/edit/angular-email-validation?file=app%2Fapp.component.html
