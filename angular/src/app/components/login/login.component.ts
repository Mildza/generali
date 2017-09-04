import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import {StorageService} from '../../services/storage.service'
import {UserService} from '../../services/user.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String
  password: String
  user: String
  owner: String

  constructor(
    private authService:AuthService,
    private flashMessage: FlashMessagesService ,
    private router: Router,
    private storageService: StorageService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUserOwner()
    .subscribe(name => {
      this.owner = name;
    })
  }

  onLoginSubmit(){
    const user = {      
      username: this.username,
      password: this.password      
  }
   
  this.authService.authenticateUser(user).subscribe(data => {
    if(data.success){
      this.authService.storeUserData(data.token, data.user)        
      this.flashMessage.show(
        'You are loged in', {
        cssClass: 'alert-success', 
        timeout: 3000})
        
        this.storageService.getStorage()
        this.userService.changeUser(this.username)
        
        
      this.router.navigate(['/profile'])

    } else {
      this.flashMessage.show(
        data.msg, {
        cssClass: 'alert-danger', 
        timeout: 3000})
      this.router.navigate(['/login']) 
      }
  })
  }

}
