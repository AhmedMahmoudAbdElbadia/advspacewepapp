import { Injectable ,Inject} from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class AdvspaceService {
  clientdesign: string;
  partnerapproval: string;
  request: string;
  city: string;
  advrequest: string;
  user: string;
  apiKey: string;
  http: any;
  static get parameters() {
    return [Http];
}

  constructor(http) {
    this.http =http;
    this.apiKey='klpJFMrBlAESRbeHMJd0fMG16e6e_8ik';
    this.user='https://api.mlab.com/api/1/databases/advspaceapp/collections/user';
    this.advrequest ='https://api.mlab.com/api/1/databases/advspaceapp/collections/request';
    this.city ='https://api.mlab.com/api/1/databases/advspaceapp/collections/city';
    this.partnerapproval  ='https://api.mlab.com/api/1/databases/advspaceapp/collections/partnerapproval ';
    this.clientdesign  ='https://api.mlab.com/api/1/databases/advspaceapp/collections/clientdesign';


   }
   private _url= 'assets/country.json';
   getfromjson(){
       
       return this.http.get(this._url).map((res:any) => res.json())
       .catch((error:any) => console.log(error));
   }



   getcity(){
    
        return this.http.get(this.city+'?apiKey='+this.apiKey).map(res => res.json());
        
    }
    updateuserstate(UserId,type){
      var headers=new Headers();
      headers.append('Content-Type','application/json');
      return this.http.put(this.user+'/'+UserId+'?apiKey='+this.apiKey,JSON.stringify({ "$set" : { "UserState" : ""+type+"" } }),{headers:headers})
      .map(res=> res.json());
    }
    SignatureAgree(QuId,type,date){
      var headers=new Headers();
      headers.append('Content-Type','application/json');
      return this.http.put(this.partnerapproval+'/'+QuId+'?apiKey='+this.apiKey,JSON.stringify({ "$set" : { "State" : ""+type+"" ,"DateAccepted":date} }),{headers:headers})
      .map(res=> res.json());
    }
    getuser(){
      
         return this.http.get(this.user+'?apiKey='+this.apiKey).map((res:any) => res.json());
        // return this.http.get(this.user+'?q={"Uid": "d5WpPB7gtvNo43WWeecOC38VX2v1"}&fo=true&apiKey='+this.apiKey).map(res => res.json());
      }
      GetPartnerQuotationWaiting(){
        return this.http.get(this.partnerapproval+'?q={"State": "Waiting"}&fo=true&s={"_id": -1}&apiKey='+this.apiKey).map((res:any) => res.json());
        
      }
      getPartnerApproval(){
        
           return this.http.get(this.partnerapproval+'?s={"_id": -1}&apiKey='+this.apiKey).map((res:any) => res.json());
          // return this.http.get(this.user+'?q={"Uid": "d5WpPB7gtvNo43WWeecOC38VX2v1"}&fo=true&apiKey='+this.apiKey).map(res => res.json());
        }
      getrequestes(){
        
           return this.http.get(this.advrequest+'?apiKey='+this.apiKey).map((res:any) => res.json());
          // return this.http.get(this.user+'?q={"Uid": "d5WpPB7gtvNo43WWeecOC38VX2v1"}&fo=true&apiKey='+this.apiKey).map(res => res.json());
        }
        UpdateRquestToWaiting(RequestID){
          var headers=new Headers();
          headers.append('Content-Type','application/json');
          return this.http.put(this.advrequest+'/'+RequestID+'?apiKey='+this.apiKey,JSON.stringify({ "$set" : { "RequestState" : "Waiting" } }),{headers:headers})
          .map(res=> res.json());
        }
        UpdateRquestToCancel(RequestID){
          var headers=new Headers();
          headers.append('Content-Type','application/json');
          return this.http.put(this.advrequest+'/'+RequestID+'?apiKey='+this.apiKey,JSON.stringify({ "$set" : { "RequestState" : "Cancel" } }),{headers:headers})
          .map(res=> res.json());
        }

        UpdateRquestToAccepted(RequestID,date,day,month,year){
          var headers=new Headers();
          headers.append('Content-Type','application/json');
          return this.http.put(this.advrequest+'/'+RequestID+'?apiKey='+this.apiKey,JSON.stringify({ "$set" : { "RequestState" : "Accepted" ,"DateOfAccepted":date,"Day":day,"Month":month,"Year":year} }),{headers:headers})
          .map(res=> res.json());
        }
        UpdateRquestAddSendOfAccepet(RequestID,date){
          var headers=new Headers();
          headers.append('Content-Type','application/json');
          return this.http.put(this.advrequest+'/'+RequestID+'?apiKey='+this.apiKey,JSON.stringify({ "$set" : { "DateAccepted" : ""+date+"" } }),{headers:headers})
          .map(res=> res.json());
        }

      DeleteCity(CityId){
        var headers=new Headers();
        headers.append('Content-Type','application/json');
        return this.http.delete(this.city+'/'+CityId+'?apiKey='+this.apiKey,{headers:headers})
        .map(res=> res.json());
        }
   addUserDetails(UserDetails){
    var headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this.user+'?apiKey='+this.apiKey,JSON.stringify(UserDetails),{headers:headers})
    .map(res=> res.json());
    }
    

   addPartnerApproval(Data){
    var headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this.partnerapproval+'?apiKey='+this.apiKey,JSON.stringify(Data),{headers:headers})
    .map(res=> res.json());
    }
    addClientDesign(Data){
      var headers=new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post(this.clientdesign+'?apiKey='+this.apiKey,JSON.stringify(Data),{headers:headers})
      .map(res=> res.json());
      }
   addCity(City){
    var headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this.city+'?apiKey='+this.apiKey,JSON.stringify(City),{headers:headers})
    .map(res=> res.json());
    }



   addRequest(Request){
    var headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this.advrequest+'?apiKey='+this.apiKey,JSON.stringify(Request),{headers:headers})
    .map(res=> res.json());
    }
}
