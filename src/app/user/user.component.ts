import { Component, OnInit } from '@angular/core';
import { AdvspaceService } from "app/advspace.service";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router } from '@angular/router';
import {FileUpload} from '../../fileupload'
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import {UploadFileService} from '../upload-file.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}
@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{
    userrequestesAcceptedFilterDate: any;
    fileUploads: FirebaseListObservable<FileUpload[]>;
    
    selectedFiles: FileList
    currentFileUpload: FileUpload
    progress: {percentage: number} = {percentage: 0}
    userrequestesAccepted: any;
    userrequestesCancel: any;
    userrequestesWaiting: any;
    userrequestesNotActive: any;
    userrequestes: any;
    requestes: any;
    s: any;
    t: boolean;
    showreso:boolean
    st:boolean
    st2:boolean
    deisgndone:boolean
public tableData1: TableData;
public tableData2: TableData;
    constructor(private router: Router,private AdvspaceService: AdvspaceService,private _firebaseAuth: AngularFireAuth,private uploadService: UploadFileService){
      this.t=false;
    }

    ngOnInit(){
        this.showreso=false;
        this.st=false;
        this.st2=false;
        this.deisgndone=false;
        this.AdvspaceService.getrequestes().subscribe(data=>{
            this.requestes=data;
        

 
            
    this.userrequestesNotActive=this.requestes.filter(res=>
        
         res.UserId===this._firebaseAuth.auth.currentUser.uid && res.RequestState==="NotActive",
      
        );


this.userrequestesWaiting=this.requestes.filter(res=>
    
     res.UserId===this._firebaseAuth.auth.currentUser.uid && res.RequestState==="Waiting",
  
    );

    this.userrequestesCancel=this.requestes.filter(res=>
        
         res.UserId===this._firebaseAuth.auth.currentUser.uid && res.RequestState==="Cancel",
      
        );
        this.userrequestesAccepted=this.requestes.filter(res=>
            
             res.UserId===this._firebaseAuth.auth.currentUser.uid && res.RequestState==="Accepted",
          
            );
            let datenow=new Date();
            
            let month=datenow.getMonth()+1; 
            let day=datenow.getDate() -2;
            let year =datenow.getFullYear();
   this.userrequestesAcceptedFilterDate=this.userrequestesAccepted.filter(res=>
      
        res.Year===year && res.Month ===month && res.Day  <= day
       )
      
     })  
        this.s="s"
        //  if(!this.t){
        //       this.router.navigate(['home']);
        //  }
        this.tableData1 = {
            headerRow: [  'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', this.s, 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };


    }
   
    UpdateRquestToWaiting(RequestId){
        this.AdvspaceService.UpdateRquestToWaiting(RequestId).subscribe(data=>
    {
     
        this.ngOnInit();
    }
        )
    
    }
    UpdateRquestToCancel(RequestId){
        this.AdvspaceService.UpdateRquestToCancel(RequestId).subscribe(data=>
    {
       
        this.ngOnInit();
    }
        )
    
    }
    showresofalse(){
        this.showreso=false;
    }
    showresotrue(){
        this.showreso=true;
    }


    state(){
        this.st=true;
        this.st2=false;
    }
    state2(){
        this.st=false;
        this.st2=true
    }

    deisgn(){
 this.deisgndone=true;
    }


  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload(RequestId) {
    const file = this.selectedFiles.item(0)
  
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorageClient(this.currentFileUpload, this.progress,RequestId) 
    console.log(this.currentFileUpload)
    
 
  }

}
