import { Component, OnInit, Input } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AdvspaceService } from "app/advspace.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  companyaddress: any;
  phonenum: any;
  companytype: any;
  companyname: any;
  useremail: any;
  userid: any;
  AdvspaceService: any;
  email: any;
  pass:any;
  resualt:any

emailalert:string="";
passalert:string="";
companynamealert:string="";
companytypealert:string="";
companyaddressalert:string="";
phonenumalert:string="";


  emailinput:boolean;
  companynameinput:boolean;
  companytypeinput:boolean;
  companyaddressinput:boolean;
  phonenuminput:boolean;
  passinput:boolean;
private user: Observable<firebase.User>;
  constructor(private _firebaseAuth: AngularFireAuth, private router: Router,AdvspaceService:AdvspaceService) {
    this.user = _firebaseAuth.authState;
    this.AdvspaceService=AdvspaceService;

    this.emailinput=false;
    this.companynameinput=false;
    this.companytypeinput=false;
    this.companyaddressinput=false;
    this.phonenuminput=false;
    this.passinput=false;
   }
   
  ngOnInit() {
  }

  createUser(email,pass,companyname,companyaddress,companytype,phonenum) {
  
  if(email.value!=""&&pass.value!=""&&companyname.value!=""&&companyaddress.value!=""&&companytype.value!=""&&phonenum.value!=""){ 
    this.email=email.value;
  this.pass=pass.value;

    return this._firebaseAuth.auth.createUserWithEmailAndPassword(this.email,this.pass).then(user=>{
      this.userid=user.uid;
      this.useremail=user.email;
      this.companyname=companyname;
      this.companytype=companytype;
      this.phonenum=phonenum;
      this.companyaddress=companyaddress;
   
       var UserDetails={
         Uid:this.userid,
         UserEmail:this.useremail,
         CompanyName:this.companyname.value,
         CompanyAddress:this.companyaddress.value,
         CompanyType:this.companytype.value,
         PhoneNum:this.phonenum.value,
         UserState:"Client"
   
       }
   
     
   this.AdvspaceService.addUserDetails(UserDetails).subscribe(data=>
     {   this.resualt=data},
     err => console.log(err)
   
    )     
    this.emailinput=false;
    this.companynameinput=false;
    this.companytypeinput=false;
    this.companyaddressinput=false;
    this.phonenuminput=false;
    this.passinput=false;

    email.value="";
    pass.value="";
   this.companyname.value="";
    this.companyaddress.value="";
   this.companytype.value="";
    this.phonenum.value="";

    this.router.navigate(['home']);
     }).catch((error)=> {
         // Handle Errors here.
     
         var errorCode = error.code;
         var errorMessage = error.message;
   
    
         // ...
         if(errorCode=="auth/invalid-email"){
          this.emailinput=true;
          this.emailalert=" ادخل البريد الالكتروني بطريقة صحيحة"
          
   
         }
        
         if (errorCode=="auth/email-already-in-use"){
          // this.emailinput=true;
          // this.emailalert="هذا البريد الالكتروني مسجل من قبل"
         }
         
         if(errorCode=="auth/weak-password"){
          this.passinput=true;
          this.passalert="يجب انت تكون كلمة المرور اكثر من 6 حروف او ارقام"
         }
         else{
          this.emailinput=false;
         }
        
       });
  }
  else{
    // this.emailinput=false;
    // this.companynameinput=false;
    // this.companytypeinput=false;
    // this.companyaddressinput=false;
    // this.phonenuminput=false;
    // this.passinput=false;
    if(email.value==""){
     
       this.emailinput=true;
       this.emailalert="ادخل البريد الالكتروني"

       
    
    }
    else{     
        this.emailinput=false;
      

    }
     if(pass.value==""){
      
       this.passinput=true;
       this.passalert="ادخل كلمة المرور"
    }
    else{     
      this.passinput=false;
    

  }
    
     if(companyname.value==""){

      this.companynameinput=true;
      this.companynamealert="ادخل اسم الشركة";
          }
          else{
            this.companynameinput=false;
          }


           if(companyaddress.value==""){
           
             this.companyaddressinput=true;
            
             this.companyaddressalert="ادخل عنوان الشركة"
      
             
                }
                else{
                  this.companyaddressinput=false;
                }


                 if(companytype.value==""){
                 
                  this.companytypeinput=true;
                  this.companytypealert="ادخل نشاط الشركة"
                      }
                      else{
                        this.companytypeinput=false;
                      }
                      
                       if(phonenum.value==""){
                        
                        this.phonenuminput=true;
                        this.phonenumalert="ادخل رقم الجوال"
                            }
                            else{
                              this.phonenuminput=false;
                            }
  }
  
    
    
}




}
