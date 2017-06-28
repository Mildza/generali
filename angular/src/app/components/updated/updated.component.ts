import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import {  FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-updated',
  templateUrl: './updated.component.html',
  styleUrls: ['./updated.component.css']
})
export class UpdatedComponent implements OnInit {
 
  updateForm: FormGroup;  

    lastname: String
    firstname: String   
    phone: Array<number>  
    address:{
      street: String
      city: String}
    policy:{
      describe: String
      values: Number
      payday: Date
      warning: Date
    }   
    recommendation: String  
    note:String

res: { 
    [0]   
  }

  result:{
    lastname: String
    firstname: String   
    phone: Array<number>  
    address:{
      street: String
      city: String}
    policy:{
      describe: String
      values: Number
      payday: Date
      warning: Date
    }   
    recommendation: String  
    note:String
  } 
  
  data:{}
  id:String

  constructor(
    private authService:AuthService,
    private route: ActivatedRoute,    
    private flashMessage: FlashMessagesService,
    private router:Router,
    private fb: FormBuilder
  ) {
    this.createForm();
   }

   ngOnInit() {
     const id ="591eb767013c380b5cf7deaf"  
   }

   createForm() {
    this.updateForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: '',
      phone: '',
      address: this.fb.group({
        street: '',
        city: ''
      }),
      policy: this.fb.group({
        describe: '',
        values: '',
        payday: '',
        warning: ''
      }),
      recommendation: '',
      note: '',
    });
       const id ="591eb767013c380b5cf7deaf"
       this.authService.getUpdate(id)
      .subscribe(res => {
        // console.log(res),
        this.result = res
        // console.log(this.result[0].firstname),
        // console.log(this.result[0].address.street)
        
        this.updateForm.patchValue({
        firstname:this.result[0].firstname,
        lastname:this.result[0].lastname,
        phone:this.result[0].phone,
        address:{
          street:this.result[0].address.street,
          city:this.result[0].address.city
        },
        policy:{
          describe:this.result[0].policy.describe,
          values:this.result[0].policy.value,
          payday:this.result[0].policy.payday,
          warning:this.result[0].policy.warning 
        },
        recommendation:this.result[0].recommendation,
        note:this.result[0].note,
        })
        }
      ) 
 }

 

onSubmit2(client){

    const firstname2 = this.updateForm.get('firstname')  
    const lastname2 = this.updateForm.get('lastname') 
    const phone2=  this.updateForm.get('phone')
    const street2= this.updateForm.get('address.street')     
    const city2= this.updateForm.get('address.city')
    const describe2= this.updateForm.get('policy.describe')
    const values2= this.updateForm.get('policy.values')
    const warning2= this.updateForm.get('policy.warning')    
    const payday2= this.updateForm.get('policy.payday')    
    const recommendation2= this.updateForm.get('recommendation')    
    const note2= this.updateForm.get('note') 
  
    const newClient = {
    firstname :firstname2.value,
    lastname : lastname2.value,
    phone:  phone2.value,
    street: street2.value,      
    city: city2.value,
    describe: describe2.value,
    values: values2.value,
    warning: warning2.value,
    payday: payday2.value,
    recommendation: recommendation2.value,
    note: note2.value,
    _id:"591eb767013c380b5cf7deaf"
  }
  
    
    this.authService.updateClient2(newClient).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Promenjeni podaci', {cssClass: 'alert-success', timeout: 3000})
        // this.router.navigate(['/all'])  
      } else {
        this.flashMessage.show('Promena nije uspela', {cssClass: 'alert-danger', timeout: 3000})
        
        }
    }) 
    
    
     
  
  // console.log(client.firstname)
  
}

  onSubmit(client){
      console.log("Milan")
      const newclient = {
      firstname: client.firstname,
      lastname: client.lastname,
      phone: client.phone,      
      street: client.address.street,
      city: client.address.city,
      describe: client.policy.describe,
      value: client.policy.values,
      payday: client.policy.payday,
      warning: client.policy.warning,
      recommendation: client.recommendation,
      note: client.note,
      id :"591eb767013c380b5cf7deaf" 
    } 
    console.log(newclient.firstname )
    console.log(this.updateForm.get('firstname').value )
    
        
      
      this.authService.updateClient2(newclient).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Promenjeni podaci', {cssClass: 'alert-success', timeout: 3000})
        // this.router.navigate(['/all'])  
      } else {
        this.flashMessage.show('Promena nije uspela', {cssClass: 'alert-danger', timeout: 3000})
        
        }
    }) 
     
  }  

}
