import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  private owner: Subject<String>

  constructor() {
    this.owner = new Subject();
  }
  
  getUserOwner(){
    return this.owner.asObservable()
  }
  
  changeUser(name){
    this.owner.next(name)
  }

 source = Observable.create(observer => {
  // Yield a single value and complete
  observer.next(42);
  

  // Any cleanup logic might go here
  return () => console.log('disposed')
});


  subscription = this.source.subscribe(
  x => console.log('onNext: %s', x),
  e => console.log('onError: %s', e),
  () => console.log('onCompleted'));

}