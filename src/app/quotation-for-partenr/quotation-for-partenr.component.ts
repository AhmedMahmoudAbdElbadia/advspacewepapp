import { Component, OnInit } from '@angular/core';
import { AdvspaceService } from "app/advspace.service";
import { UploadFileService } from "app/upload-file.service";
@Component({
  selector: 'app-quotation-for-partenr',
  templateUrl: './quotation-for-partenr.component.html',
  styleUrls: ['./quotation-for-partenr.component.css']
})
export class QuotationForPartenrComponent implements OnInit {
  DateAccepted: string;
  Quid: any;
  Quotation: any;
  PartnerQuotationCompeleted: any;
  PartnerQuotationWaiting: any;
  PartnerQuotation: any;
  fileUploads: any;

  constructor(private uploadService: UploadFileService, private _AdvspaceService:AdvspaceService) { }

  ngOnInit() {
    this._AdvspaceService.getPartnerApproval().subscribe(res=>{  
     
      this.PartnerQuotation  = res


      this.PartnerQuotationWaiting=this.PartnerQuotation.filter(res=>
      res.State==="Waiting"
      )

// this.PartnerQuotationWaiting =this._AdvspaceService.GetPartnerQuotationWaiting().subscribe(res=>{
 
//  console.log(this.PartnerQuotationWaiting)
// })
      this.PartnerQuotationCompeleted=this.PartnerQuotation.filter(res=>
        res.State==="Accepted"
        )
     
      
    })
    this.fileUploads = this.uploadService.getFileUploads();
    this.fileUploads.subscribe(re=>
      
    {}
    )

  }
SignatureAgree(name){
  let datenow=new Date();
  let month=datenow.getMonth()+1; 
  this.DateAccepted=""+datenow.getDate()+  "-"+month+  "-"+datenow.getFullYear()+"";

  this.Quotation=this.PartnerQuotationWaiting.filter(res =>
  res.Name===name
)
console.log(this.Quotation);
this.Quid=this.Quotation[0]._id.$oid;
  this._AdvspaceService.SignatureAgree(this.Quid,"Accepted", this.DateAccepted).subscribe(res=>{
 
    this.ngOnInit();
  })
 

//  this._AdvspaceService.UpdateRquestAddSendOfAccepet(this.Quid,this.DateAccepted).subscribe(
//    res=> {
//    console.log("Done Ya M3Alm")}
//  )
}
}
