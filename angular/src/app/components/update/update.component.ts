import { Component, OnInit, EventEmitter } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router, ActivatedRoute, Params} from '@angular/router'
import { FormControl } from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages'


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  
   lastname: String
    firstname: String  
    // lastname: String 
    phone: Array<number>  
    address:{
      street: String
      city: String}
    policy:{
      describe: String
      value: Number
      payday: Date
      warning: Date
    }   
    recommendation: String  
    note:String



  result: {} 

  constructor(
    private authService:AuthService,
    private route: ActivatedRoute,
    private router:Router,
    private flashMessage: FlashMessagesService,
    ) {}

  bankName: String;
  

  ngOnInit() {

    const id = this.route.snapshot.params['id']
    this.authService.getUpdate(id)
      .subscribe(result => this.result = result)
      // console.log(this.result)


  }
  
  write(client){
       console.log("milan")
      const newclient = {
      firstname: client.firstname,
      lastname: client.lastname,
      phone: client.phone,      
      street: client.address.street,
      city: client.address.city,
      describe: client.policy.describe,
      value: client.policy.value,
      payday: client.policy.payday,
      warning: client.policy.warning,
      recommendation: client.recommendation,
      note: client.note
    } 
      console.log(newclient.firstname, newclient.lastname, newclient.phone )
      const id = this.route.snapshot.params['id']      
      
      this.authService.updateClient(id, newclient).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Promenjeni podaci', {cssClass: 'alert-success', timeout: 3000})
        this.router.navigate(['/all'])  
      } else {
        this.flashMessage.show('Promena nije uspela', {cssClass: 'alert-danger', timeout: 3000})
        
        }
    }) 
     
  }  

}
