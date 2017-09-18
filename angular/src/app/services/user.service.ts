import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor() {
    
  }
  
  sudouser:BehaviorSubject<String> = new BehaviorSubject<String>('milan')


}