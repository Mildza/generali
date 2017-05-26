import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

 
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

 client : {
   lastname: String
 }

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


  }

  onUpdateSubmit(){
      this.router.navigate(['updated']);
    const newclient = {
      firstname: this.firstname,
      // lastname: this.client.lastname
      // phone: this.client.phone,      
      // street: this.client.address.street,
      // city: this.client.address.city,
      // describe: this.client.policy.describe,
      // value: this.client.policy.value,
      // payday: this.client.policy.payday,
      // warning: this.client.policy.warning,
      // recommendation: this.client.recommendation,
      // note: this.client.note
    } 
      console.log(this.firstname)
       console.log(this.client.lastname)
      
      
    //   this.authService.updateClient(newclient).subscribe(data => {
    //   if(data.success){
    //     this.flashMessage.show('User added', {cssClass: 'alert-success', timeout: 3000})
    //     // this.router.navigate(['/login'])  
    //   } else {
    //     this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000})
        
    //     }
    // }) 
     
  }  

}
