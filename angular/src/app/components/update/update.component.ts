import { Component, OnInit, AfterViewInit,  EventEmitter } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {  FormBuilder, FormGroup, Validators } from '@angular/forms'
import {FlashMessagesService} from 'angular2-flash-messages'
import { Http } from '@angular/http';
import {StorageService} from '../../services/storage.service'

declare var $:any;

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  updateForm: FormGroup;

  firstname: String 
  lastname: String
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
  owner: String
  res:{ 
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

  id:{String}

  constructor(
    private authService:AuthService,
    private route: ActivatedRoute,
    private router:Router,
    private fb: FormBuilder,
    private flashMessage: FlashMessagesService,
    private http: Http,
    private storageService: StorageService
    ) {
      
      this.createForm();
    }

    
    ngOnInit() {
     
      
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
      id:''
    });
       const id = this.route.snapshot.params['id']       
       this.authService.getUpdate(id)
      .subscribe(res => {
        this.result = res        
        
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
        id:id
        })
        }
      ) 
 }

  onSubmit(){
    const id = this.route.snapshot.params['id']

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
    owner:this.storageService.getStorage(),
    _id:id
  }
  
    
    this.authService.updateClient(id, newClient).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Promenjeni podaci', {cssClass: 'alert-success', timeout: 3000})
        this.router.navigate(['/all/'])  
      } else {
        this.flashMessage.show('Promena nije uspela', {cssClass: 'alert-danger', timeout: 3000})
        
        }
    })
  }

    public  deleteClient(){
      const id = this.route.snapshot.params['id']
        const success= Boolean
        this.http.delete('http://localhost:3000/clients/update/'+id).subscribe(res => {
            if(res.status){
        this.flashMessage.show('Obrisan Korisnik', {cssClass: 'alert-success', timeout: 3000})
        this.router.navigate(['/all/'])  
      } else {
        this.flashMessage.show('Brisanje nije uspelo', {cssClass: 'alert-danger', timeout: 3000})
        
        }
      })
    }

}