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
      this.flashMessage.show('Popunite sva polja', {cssClass: 'alert-danger', timeout: 3000})
      return false
    }
    // Validate email //
    if(!this.validateService.validateEmail(user.email)){
    this.flashMessage.show('Koristite validnu email adresu', {cssClass: 'alert-danger', timeout: 3000})
      return false
    }
    // register User //    
    this.authService.checkUser(this.username).subscribe(data =>{
      if(data.success){
        this.flashMessage.show('username je zauzet, izaberite drugo', {cssClass: 'alert-danger', timeout: 3000})
      } else if(!data.succes){
      this.authService.registerUser(user).subscribe(data => {
        if(data.success){
          this.flashMessage.show('Registrovani ste i mozete se logovati', {cssClass: 'alert-success', timeout: 3000})
          this.router.navigate(['login'])  
        } else {
          this.flashMessage.show('Nesto nije u redu', {cssClass: 'alert-danger', timeout: 3000})
          this.router.navigate(['register']) 
          }
      })
      }
    })

  }
}
