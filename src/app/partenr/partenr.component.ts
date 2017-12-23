import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import {FileUpload} from '../../fileupload'
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import {UploadFileService} from '../upload-file.service';
import { AdvspaceService } from "app/advspace.service";

@Component({
  selector: 'app-partenr',
  templateUrl: './partenr.component.html',
  styleUrls: ['./partenr.component.css']
})


export class PartenrComponent implements OnInit {
  PartnerQuotationAccepted: any;
  PartnerQuotation: any;
  files: any;

  fileUploads: FirebaseListObservable<FileUpload[]>;
  
  selectedFiles: FileList
  currentFileUpload: FileUpload
  progress: {percentage: number} = {percentage: 0}
  constructor(private uploadService: UploadFileService, private _AdvspaceService:AdvspaceService) {
    

  }
  
  ngOnInit() {
  
    this.fileUploads = this.uploadService.getFileUploads();
    this.fileUploads.subscribe(re=>
      
  {}
    )
  
    this._AdvspaceService.getPartnerApproval().subscribe(res=>{ 
       
      this.PartnerQuotation  =res


      this.PartnerQuotationAccepted=this.PartnerQuotation.filter(res=>
      res.State==="Accepted"
      )
    })
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    const file = this.selectedFiles.item(0)
   
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStoragePartenr(this.currentFileUpload, this.progress) 
   
    
 
  }

  }

