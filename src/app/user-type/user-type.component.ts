import { Component, OnInit } from '@angular/core';
import { AdvspaceService } from "app/advspace.service";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {

  UserId: any;
  SelectedUser: any;
  currentuser: any;
  users: any;

  constructor(private AdvspaceService: AdvspaceService,private _firebaseAuth: AngularFireAuth,private router: Router) { }

  ngOnInit() {

    this.AdvspaceService.getuser().subscribe(data=>{
      this.users=data;
  



    
   
})  

  }
  getid(name){
  

this.SelectedUser=this.users.filter(res=>
  
   res.CompanyName===name

  )
   
   

  }
  updateuserstate(type){
    this.UserId=this.SelectedUser[0]._id.$oid;
    
  this.AdvspaceService.updateuserstate(this.UserId,type).subscribe(res=>{
  
  })
}

}
