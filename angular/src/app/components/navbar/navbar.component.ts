import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages'
import { StorageService } from '../../services/storage.service'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sudouser: String

  constructor(
    public authService:AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private storageService: StorageService,
    private userService: UserService
    ) {
      this.userService.sudouser.subscribe(sudouser => {
        this.sudouser = sudouser
      })  
     }
   
  ngOnInit() {
   
  }
  
  // changeUser(){
  //   this.owner = this.storageService.getStorage()
  // }

  onLogoutClick(){
    this.authService.logout()
    this.storageService.getStorage()
    this.flashMessage.show('You are logged out', {
    cssClass: 'alert-success',
    timeout: 3000
  })
    this.router.navigate(['/login'])
    return false
  }
  
}
