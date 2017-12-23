import { Component, OnInit } from '@angular/core';
import { AdvspaceService } from "app/advspace.service";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router } from '@angular/router';

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
    ContactEmail: string;
    ContactCall: string;
    ContactVisit: string;
    Contact: any;
    user: Observable<firebase.User>;
    userid: any;
    currentuser: any;
    
    users: any;
    companyaddress: any;
    companytype: any;
    email: any;
    phonenum: any;
    companyname: any;
    FinishDate: any;
    StartDate: any;
    AdvType: any;
    Advplace: any;
    city: any;
    resualt:any [] ;
    
    constructor(private AdvspaceService: AdvspaceService,private _firebaseAuth: AngularFireAuth,private router: Router) {
      
      this.user = _firebaseAuth.authState;
      this.AdvspaceService.getcity().subscribe(data=>
        {   this.resualt=data;
         
        },
        err => console.log(err)
      
       )     
      
  }
  private basePath:string = '/uploads';
  private uploadTask: firebase.storage.UploadTask;
  
    ngOnInit(){ 
      
 
    //    if(){

    //    }
    //     this._firebaseAuth.authState.subscribe(data=>{ 
    //        this.userid= data.uid;
    //        console.log('user id '+this.userid)

      
    //    })
    
      this.AdvspaceService.getuser().subscribe(data=>{
           this.users=data;
       


   this.currentuser=this.users.filter(res=>
       
        res.Uid===this._firebaseAuth.auth.currentUser.uid,
      
       )
        
        
    })  
  
    
    }
      
AddRequest(City,Advplace,AdvType,StartDate,FinishDate,ContactVisit,ContactCall,ContactEmail){
    this.city=City;
    this.Advplace=Advplace;
    this.AdvType=AdvType;
    this.StartDate=StartDate;
    this.FinishDate=FinishDate;
    // this.Contact=Contact
     this.companyname=this.currentuser[0].CompanyName;
     this.phonenum=this.currentuser[0].PhoneNum;
     this.email=this.currentuser[0].UserEmail;
     this.companytype=this.currentuser[0].CompanyType;
     this.companyaddress=this.currentuser[0].CompanyAddress;
     this.userid=this.currentuser[0].Uid;
  var Contact:string;
     if(ContactVisit.checked){
         this.Contact="زيارة من مندوبنا";
        

    var request ={
        UserId:this.userid,
        CompanyName:this.companyname,
        PhoneNum:this.phonenum,
        Email:this.email,
        CompanyType:this.companytype,
        CompanyAddress:this.companyaddress,
        City: this.city.value,
        Advplace:this.Advplace.value,
        AdvType:this.AdvType.value,
        StartDate:this.StartDate.value,
        FinishDate:this.FinishDate.value,
        ContactState:this.Contact,
        RequestState:"NotActive"
    }
    this.AdvspaceService.addRequest(request).subscribe(data=>
        {   this.resualt=data
      },
        err => console.log(err)
      
       )     
       this.router.navigate(['user']);
        this.city.value="";
       this.Advplace.value="";
       this.AdvType.value="";
    this.StartDate.value="";
      this.FinishDate.value="";
     }
     if(ContactCall.checked){
         this.Contact="اتصال";
         

    var request2 ={
        UserId:this.userid,
        CompanyName:this.companyname,
        PhoneNum:this.phonenum,
        Email:this.email,
        CompanyType:this.companytype,
        CompanyAddress:this.companyaddress,
        City: this.city.value,
        Advplace:this.Advplace.value,
        AdvType:this.AdvType.value,
        StartDate:this.StartDate.value,
        FinishDate:this.FinishDate.value,
        ContactState:this.Contact,
        RequestState:"NotActive"
    }
    this.AdvspaceService.addRequest(request2).subscribe(data=>
        {   this.resualt=data
       },
        err => console.log(err)
      
       )     
       this.router.navigate(['user']);
        this.city.value="";
       this.Advplace.value="";
       this.AdvType.value="";
    this.StartDate.value="";
      this.FinishDate.value="";
     }
     if(ContactEmail.checked){
        this.Contact="بريد الكتروني";
      

    var request3 ={
        UserId:this.userid,
        CompanyName:this.companyname,
        PhoneNum:this.phonenum,
        Email:this.email,
        CompanyType:this.companytype,
        CompanyAddress:this.companyaddress,
        City: this.city.value,
        Advplace:this.Advplace.value,
        AdvType:this.AdvType.value,
        StartDate:this.StartDate.value,
        FinishDate:this.FinishDate.value,
        ContactState:this.Contact,
        DateOfAccepted:"",
        RequestState:"NotActive",
        Day:"",
        Month:"",
        Year:""
    }
    this.AdvspaceService.addRequest(request3).subscribe(data=>
        {   this.resualt=data
       },
        err => console.log(err)
      
       )     
   this.router.navigate(['user']);
        this.city.value="";
       this.Advplace.value="";
       this.AdvType.value="";
    this.StartDate.value="";
      this.FinishDate.value="";
   
  }
 
}
}