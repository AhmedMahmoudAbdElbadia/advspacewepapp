import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import { CanActivate, Router } from '@angular/router';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'طلب مساحة اعلانية جديد',  icon: 'ti-settings', class: '' },
    { path: 'user', title: 'User Profile',  icon:'ti-user', class: '' },
    { path: 'table', title: 'Table List',  icon:'ti-view-list-alt', class: '' },
    { path: 'typography', title: 'Typography',  icon:'ti-text', class: '' },
    { path: 'icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '' },
    { path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
    
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];
export const ROUTES2: RouteInfo[] = [
    { path: 'login', title: 'Login',  icon: 'ti-login', class: '' },
    { path: 'user', title: 'Register',  icon:'ti-rigster', class: '' },
 
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    da: any;
    user: Observable<firebase.User>;


    public menuItems: any[];
    test:boolean;

    constructor(private _firebaseAuth: AngularFireAuth,private router: Router) {
        
        // this.user = _firebaseAuth.authState;
  
        this._firebaseAuth.authState.subscribe(user=>{

            if(user){
              this.test=true;
            this.menuItems = ROUTES.filter(menuItem => menuItem);

            }
            // else{
            //   this.test=false;
            //   this.menuItems=ROUTES2.filter(menuItem => menuItem);
            // }
          })
    }

    // ngAfterViewInit() {
    //     // Component views are initialized 
    //      this.da= this._firebaseAuth.auth.currentUser.uid;
    //    console.log(this.da);
    //   }
  
     te() {
        this.da= this._firebaseAuth.auth.currentUser.photoURL
    
      }
    ngOnInit() {
        this._firebaseAuth.authState.subscribe(user=>{
          
            if(user){
              this.test=true;
            this.menuItems = ROUTES.filter(menuItem => menuItem);

            }
            // else{
            //   this.test=false;
            //   this.menuItems=ROUTES2.filter(menuItem => menuItem);
            // }
          })
    //     if(this.test){ 
    //         this.menuItems = ROUTES.filter(menuItem => menuItem);
            
    //     }
    //    else{
    //           this.menuItems=ROUTES2.filter(menuItem => menuItem);
    //    }
       
     
       
       
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
