import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  private owner: Subject<String>

  constructor() {
    this.owner = <Subject<String>>new Subject();
  }
  
  getUserOwner(){
    return this.owner.asObservable();
  }
  
  changeUser(name){
    this.owner.next(name);
  }

}