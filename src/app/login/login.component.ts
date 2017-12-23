import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AdvspaceService } from "app/advspace.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass: any;
  email: any;
  emailalert:string="";
  passalert:string="";
  emailinput:boolean;
  passinput:boolean;
  private user: Observable<firebase.User>;
  
  constructor(private router: Router,private _firebaseAuth: AngularFireAuth) { 
    this.user = _firebaseAuth.authState;
    this.emailinput=false;
    this.passinput=false;
    
  }

  ngOnInit() {

    this._firebaseAuth.authState.subscribe(user=>{
    
      if(user){
     
       
        this.router.navigate(['home']);
        
      }
     
    })
  }
  GoToRegisterPage(){
    this.router.navigate(['register']);
  }

  SignIn(email,pass){
    this.email=email.value;
      this.pass=pass.value;
    if(this.email!=""&&this.pass!=""){
      
          this._firebaseAuth.auth.signInWithEmailAndPassword(this.email,this.pass).then(user=>{
            this.router.navigate(['home']);
  
            this.emailinput=false;
            
            this.passinput=false;
          }).catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
      
         
            if(errorCode=="auth/user-not-found" || errorCode=="auth/wrong-password"){
              
           this.passinput=true;
              this.passalert="خطأ في البريد الالكتروني أو كلمة المرور"
             }
            
           
             
             
             
          })
    }
  }
}
