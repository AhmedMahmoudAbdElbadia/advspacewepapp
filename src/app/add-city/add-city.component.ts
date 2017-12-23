import { Component, OnInit } from '@angular/core';
import { AdvspaceService } from "app/advspace.service";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router } from '@angular/router';
@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  selectedcity: any;
  cityid: any;
  city: any;
  citeis: any;
  deletec: boolean;
  cityname: any;
  UserId: any;
  SelectedUser: any;
  currentuser: any;
  users: any;


  constructor(private AdvspaceService: AdvspaceService,private _firebaseAuth: AngularFireAuth,private router: Router) { 
        
this.deletec=false;
  }

  ngOnInit() {

this.AdvspaceService.getcity().subscribe(res=>{
  this.citeis=res
console.log('oninit')
})


  }
  
  AddCity(cityname){
    this.cityname=cityname;
    var City={
      cityname:this.cityname.value
    }
    

  this.AdvspaceService.addCity(City).subscribe(res=>{
    this.ngOnInit();
  })
this.cityname.value="";


}

deletecityview(){
    this.deletec=true;
  }
  DeleteCity(){
    this.AdvspaceService.DeleteCity(this.cityid).subscribe(res=>{
      this.ngOnInit();

    })

  }

  getid(cityname){
    this.selectedcity=this.citeis.filter(res=>
      
       res.cityname===cityname
    
      )
      this.cityid=this.selectedcity[0]._id.$oid;
  }
}
