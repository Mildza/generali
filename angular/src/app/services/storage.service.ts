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
    this.user = this.userJson.username
    return this.user    
   }
}