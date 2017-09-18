import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages'
import {Router} from '@angular/router'
import {StorageService} from '../../services/storage.service'
import {PolicyService} from '../../services/policy.service'
import { UserService } from '../../services/user.service'

import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  firstname: String  
  lastname: String 
  phone: String  
  street: String
  city: String
  describe: String
  idpolicy: Number
  value: Number
  startdate: Date
  duration: Number
  warning: Date   
  recommendation: String  
  note:String
  owner: String
  day: String
  month: String
  year: String
  additional: String
  sudouser: String
  
  public selectPolice: any
  public selectOption: any
   
  

  constructor(
    private validateService: ValidateService, 
    private authService: AuthService,    
    private flashMessage: FlashMessagesService,
    private router: Router,
    private storageService: StorageService,
    private policyService: PolicyService,
    private userService: UserService     
  ) {
      this.userService.sudouser.subscribe(sudouser => {
      this.sudouser = sudouser
      }) 
    }

  ngOnInit() {   
    var today = (moment().format('L'))
     var res = today.split("/");
     
      this.month = res[0]
      this.day = res[1]
      this.year = res[2]
    
      this.selectOption = this.policyService.selectOption
      this.selectPolice=this.policyService.selectPolice

  }
  onAddSubmit(){
    
    const client = {
      firstname:  this.validateService.toLowerCase(this.firstname),
      lastname: this.validateService.toLowerCase(this.lastname),
      phone: this.phone,      
      street: this.street,
      city: this.city,
      describe: this.selectPolice.label,
      idpolicy:this.idpolicy,
      value: this.value,
      startdate: this.month+"/"+this.day+"/"+this.year,
      duration:this.duration,
      warning: this.warning,
      additional: this.additional,
      recommendation: this.recommendation,
      note: this.note,
      owner: this.sudouser
      
    }     

    this.authService.addClient(client).subscribe(data => {
      if(data.success){
        this.flashMessage.show('User added', {cssClass: 'alert-success', timeout: 3000})
        this.router.navigate(['/all/'+this.owner])  
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000})
        
        }
    })

  }
}
