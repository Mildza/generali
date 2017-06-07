import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages'
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  firstname: String  
  lastname: String 
  phone: Array<number>  
  street: String
  city: String
  describe: String
  value: Number
  payday: Date
  warning: Date   
  recommendation: String  
  note:String
  
  constructor(
    private validateService: ValidateService, 
    private authService: AuthService,    
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onAddSubmit(){
    const client = {
      firstname: this.firstname,
      lastname: this.lastname,
      phone: this.phone,      
      street: this.street,
      city: this.city,
      describe: this.describe,
      value: this.value,
      payday: this.payday,
      warning: this.warning,
      recommendation: this.recommendation,
      note: this.note
    }

    this.authService.addClient(client).subscribe(data => {
      if(data.success){
        this.flashMessage.show('User added', {cssClass: 'alert-success', timeout: 3000})
        this.router.navigate(['/all'])  
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000})
        
        }
    })

  }
}
