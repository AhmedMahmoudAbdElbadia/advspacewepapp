import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router } from '@angular/router';
import { AdvspaceService } from "app/advspace.service";
declare var $: any;

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'home', title: 'طلب مساحة اعلانية جديد',  icon: 'ti-ticket', class: '' },
  { path: 'user', title: 'ادارة الطلبات',  icon:'ti-user', class: '' },
  //  { path: 'table', title: 'موافق عليها',  icon:'ti-view-list-alt', class: '' },
  //  { path: 'typography', title: 'ملغي',  icon:'ti-text', class: '' },
  // { path: 'icons', title: 'مكتمل',  icon:'ti-pencil-alt2', class: '' },
  // { path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
  // { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
 
  // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];

export const ROUTES2: RouteInfo[] = [
  { path: 'user-request', title: 'طلبات العملاء',  icon: 'ti-ticket', class: '' },
  { path: 'partenr', title: 'الشركاء',  icon:'ti-user', class: '' },
  { path: 'add-city', title: 'اضافة مدينة جديدة',  icon:'ti-user', class: '' },
  { path: 'user-type', title: 'صلاحيات المستخدمين',  icon:'ti-view-list-alt', class: '' },
  //  { path: 'typography', title: 'ملغي',  icon:'ti-text', class: '' },
  // { path: 'icons', title: 'مكتمل',  icon:'ti-pencil-alt2', class: '' },
  // { path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
  // { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
 
  // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];

export const ROUTES3: RouteInfo[] = [
  { path: 'quotations', title: 'Quotations',  icon: 'ti-ticket', class: '' },
  
  //  { path: 'typography', title: 'ملغي',  icon:'ti-text', class: '' },
  // { path: 'icons', title: 'مكتمل',  icon:'ti-pencil-alt2', class: '' },
  // { path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
  // { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
 
  // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  comanyname: any;
  state: any;
  userstate: any;
  userdetails: any;
  userid: string;
  us: boolean;

public menuItems: any[];
private user: Observable<firebase.User>;
constructor(private _firebaseAuth: AngularFireAuth,private router: Router,private AdvspaceService: AdvspaceService){
  this.us=true;
  this.user = _firebaseAuth.authState;


  this._firebaseAuth.authState.subscribe(user=>{



    if(user){
      this.us=true;
   
     
    }
    else{
      this.us=false;
      this.router.navigate(['login']);
    }

  
  })
}
// ngAfterContentChecked()	
// {
//   this._firebaseAuth.authState.subscribe(user=>{
//     console.log(user);
//     if(user){
//       this.us=true;
//       this.menuItems = ROUTES.filter(menuItem => menuItem);
      
//     }
//     else{
//       this.us=false;
//       this.router.navigate(['login']);
//     }
//   })
//   console.log("go");
// }
ngOnInit() {
  
  
  this._firebaseAuth.authState.subscribe(user=>{
 
    this.AdvspaceService.getuser().subscribe(userdetails=>{
      this.userdetails=userdetails

      
    if(user!=undefined){
      this.userstate=this.userdetails.filter(res=>
        res.Uid===user.uid)

        this.state=this.userstate[0].UserState;
    this.comanyname=this.userstate[0].CompanyName; 
    if(this.state=="Client"){
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    if(this.state=="Admin"){
      this.menuItems = ROUTES2.filter(menuItem => menuItem);
      this.router.navigate(['user-request']);
    }
    if(this.state=="Partenr"){
      this.menuItems = ROUTES3.filter(menuItem => menuItem);

      
    }
    }
    
  
    })
    if(user){
      this.us=true;
      
    
    
    }
    else{
      this.us=false;
      this.router.navigate(['login']);
    }
  })
}
te(){
  
}
isNotMobileMenu(){
  if($(window).width() > 991){
      return false;
  }
  return true;
}
signInWithGooglePlus() {
  return this._firebaseAuth.auth.signInWithPopup(
    new firebase.auth.GoogleAuthProvider()

 
  )
  
}
SignOut(){
this._firebaseAuth.auth.signOut();
this.router.navigate(['login']);

}


}
