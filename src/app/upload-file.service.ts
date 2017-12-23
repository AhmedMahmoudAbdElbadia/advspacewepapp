import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import {FileUpload} from '../fileupload';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AdvspaceService } from "app/advspace.service";


@Injectable()
export class UploadFileService {

  resualt: any;

  constructor(private db: AngularFireDatabase,private _AdvspaceService:AdvspaceService) { }

  private basePath = '/uploads';
  fileUploads: FirebaseListObservable<FileUpload[]>;
    pushFileToStoragePartenr(fileUpload: FileUpload, progress: {percentage: number}) {
      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
   
 
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // in progress
          const snap = snapshot as firebase.storage.UploadTaskSnapshot
          progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
        },
        (error) => {
          // fail
          console.log(error)
        },
        () => {
          // success
          fileUpload.url = uploadTask.snapshot.downloadURL
          fileUpload.name=fileUpload.file.name;
         
          this.saveFileData(fileUpload)
          let datenow=new Date();
          let month=datenow.getMonth()+1;
          var data={
              Name:fileUpload.file.name,
              DownLoadUrl:uploadTask.snapshot.downloadURL,
              DateSend:""+datenow.getDate()+  "-"+month+  "-"+datenow.getFullYear()+"",
              DateAccepted:"",
              State:"Waiting"

              
          }
          this._AdvspaceService.addPartnerApproval(data).subscribe(data=>
            {   this.resualt=data
            },
            err => console.log(err)
          
           )     

        }
      );
    }


    pushFileToStorageClient(fileUpload: FileUpload, progress: {percentage: number},RequestId) {
      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
   
  console.log(fileUpload.file.name);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // in progress
          const snap = snapshot as firebase.storage.UploadTaskSnapshot
          progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
        },
        (error) => {
          // fail
          console.log(error)
        },
        () => {
          // success
          fileUpload.url = uploadTask.snapshot.downloadURL
          fileUpload.name=fileUpload.file.name;
         
          this.saveFileData(fileUpload)
          let datenow=new Date();
          let month=datenow.getMonth()+1;
          var data={
              RequestId:RequestId,
              Name:fileUpload.file.name,
              DownLoadUrl:uploadTask.snapshot.downloadURL,
              DateSend:""+datenow.getDate()+  "-"+month+  "-"+datenow.getFullYear()+"",
          
            

              
          }
          this._AdvspaceService.addClientDesign(data).subscribe(data=>
            {   this.resualt=data
           },
            err => console.log(err)
          
           )     

        }
      );
    }
    getFileUploads(query = {}) {
      this.fileUploads = this.db.list(this.basePath);
      return this.fileUploads
    }
    private saveFileData(fileUpload: FileUpload) {
      this.db.list(`${this.basePath}/`).push(fileUpload);
    }
}
