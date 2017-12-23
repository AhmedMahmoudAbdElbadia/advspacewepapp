import { Component ,ViewChild,OnInit} from '@angular/core';
import { HostListener } from '@angular/core';
import { AdvspaceService } from "app/advspace.service";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FilterPipe } from "app/filter.pipe";
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.css'],
  
})
export class UserRequestComponent implements OnInit {
    DateAccepted: string;
    datenow: () => number;
  userrequestesPaid: any;
  userrequestesWaitingSearch: any;
  userrequestesAccepted: any;
  userrequestesCancel: any;
  requestes: any;
  userrequestesWaiting: any;
  userrequestesNotActive: any;
   date :Date;
  constructor(private AdvspaceService: AdvspaceService,private _firebaseAuth: AngularFireAuth) { }

  ticks = 0;
  
  minutesDisplay: number = 0;
  hoursDisplay: number = 0;
  secondsDisplay: number = 0;

  sub: Subscription;

  ngOnInit() {
    this.date= new Date
    this.startTimer();

    this.AdvspaceService.getrequestes().subscribe(data=>{
      this.requestes=data;
  



console.log(this._firebaseAuth.auth.currentUser.uid);

this.userrequestesWaiting=this.requestes.filter(res=>

res.RequestState==="Waiting",

);

this.userrequestesCancel=this.requestes.filter(res=>
  
    res.RequestState==="Cancel",

  );
  this.userrequestesAccepted=this.requestes.filter(res=>
      
 res.RequestState==="Accepted",
    
      );
      this.userrequestesPaid=this.requestes.filter(res=>
        
        res.RequestState==="Paid",
      
        );
  
  
})   
  }
  

  UpdateRquestToAccepted(RequestId){
    let datenow=new Date();

    let month=datenow.getMonth()+1; 
    let day=datenow.getDate();
    let year =datenow.getFullYear();
    this.DateAccepted=""+datenow.getDate()+  "-"+month+  "-"+datenow.getFullYear()+"";
    this.AdvspaceService.UpdateRquestToAccepted(RequestId, this.DateAccepted,day,month,year).subscribe(data=>
{
    
    this.ngOnInit();
}
    )

}


private startTimer() {
   
          let timer = Observable.timer(1, 1000);
          this.sub = timer.subscribe(
              t => {
                  this.ticks = t;
                  
                  this.secondsDisplay = this.getSeconds(this.ticks);
                  this.minutesDisplay = this.getMinutes(this.ticks);
                  this.hoursDisplay = this.getHours(this.ticks);

              }
          );
     
      }
      private setFormData() {
      
        this.sub.unsubscribe();
    }
      private getSeconds(ticks: number) {
          return this.pad(ticks % 60);
      }
  
      private getMinutes(ticks: number) {
           return this.pad((Math.floor(ticks / 60)) % 60);
      }
  
      private getHours(ticks: number) {
          return this.pad(Math.floor((ticks / 60) / 60));
      }
  
      private pad(digit: any) { 
          return digit <= 9 ? '0' + digit : digit;
      }
  

}
