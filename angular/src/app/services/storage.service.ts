import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

public userData:any
public userJson:any;
public user: String 


  constructor() {
    this.userData = localStorage.getItem("user");
    this.userJson = JSON.parse(this.userData);     
   }
  
   getStorage(){
        if(this.userJson == null ){
             this.user = "ja" 
        } else {
          this.user = this.userJson.username
        }
        // console.log(this.user)   
        return this.user
             
   }    

}