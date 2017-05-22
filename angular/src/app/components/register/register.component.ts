import { Component, OnInit } from '@angular/core'
import {ValidateService} from '../../services/validate.service'
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages'
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String
  username: String
  email: String
  password: String

  constructor(
    private validateService: ValidateService, 
    private authService: AuthService,    
    private flashMessage: FlashMessagesService ,
    private router: Router
    ) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      password: this.password,
      email: this.email
  }

    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill all fields', {cssClass: 'alert-danger', timeout: 3000})
      return false
    }
    // Validate email //
    if(!this.validateService.validateEmail(user.email)){
    this.flashMessage.show('Please use a valid email address', {cssClass: 'alert-danger', timeout: 3000})
      return false
    }
    // register User //
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You are now reistered and can log in', {cssClass: 'alert-success', timeout: 3000})
        this.router.navigate(['/login'])  
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000})
        this.router.navigate(['/register']) 
        }
    })
  }
}
