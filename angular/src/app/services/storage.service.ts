import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StorageService {

public userData:any
public userJson:any;
public user: String 


private subject = new Subject<any>();

  constructor() {
    this.userData = localStorage.getItem("user");
    this.userJson = JSON.parse(this.userData); 
    
    // this.sendMessage(this.user)
   }
   getStorage(){
        this.user = this.userJson.username
        return this.user
   }
    
 
    // sendMessage(message) {
    //     this.subject.next({ message });
    // }
 
    // clearMessage() {
    //     this.subject.next();
    // }
 
    // getMessage(): Observable<any> {
    //     return this.subject.asObservable();
    // }
 

}