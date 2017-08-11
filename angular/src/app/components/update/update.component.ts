import { Component, OnInit, AfterViewInit,  EventEmitter } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {  FormBuilder, FormGroup, Validators } from '@angular/forms'
import {FlashMessagesService} from 'angular2-flash-messages'
import { Http } from '@angular/http';
import {StorageService} from '../../services/storage.service'
import {PolicyService} from '../../services/policy.service'

import * as moment from 'moment';

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
    payday: String
    warning: String
    today: String
    stardate: Date
  }   
  recommendation: String  
  note:String
  owner: String
  res:{ 
      [0]   
    }
    day:String
    month: String
    year: String
    
    split: any
    startdate:String

  result:{
    lastname: String
    firstname: String   
    phone: Array<number>  
    address:{
      street: String
      city: String}
    policy:{
      describe: String
      idpolicy: String
      values: Number
      startdate: Date
      duration: String
      warning: Date
      day:String
      year:String
      month: String
    }  
    additional: String 
    recommendation: String  
    note:String
  } 

  data:{}

  id:{String}

  selectPolicy: any
  selectOption: any

  constructor(
    private authService:AuthService,
    private route: ActivatedRoute,
    private router:Router,
    private fb: FormBuilder,
    private flashMessage: FlashMessagesService,
    private http: Http,
    private storageService: StorageService,
    private policyService: PolicyService
    ) {
      
      this.createForm();
    }

    
    ngOnInit() {
      //load policy array
      this.selectOption = this.policyService.selectOption
      this.selectPolicy=this.policyService.selectPolice
   }

   splitdate(spliter){
    
     var split = spliter.split("/");     
      this.month = split[0]
      this.day = split[1]
      this.year = split[2]
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
        selectPolicy: '',
        idpolicy:'',
        values: '',
        startdate: '',
        duration: '',
        warning: '',
        day:"",
        month:"",
        year:""
      }),
      additional:'',
      recommendation: '',
      note: '',
      id:''
    });
       const id = this.route.snapshot.params['id']       
       this.authService.getUpdate(id)
      .subscribe(res => {
        this.result = res        
        this.startdate=(moment(this.result[0].policy.startdate).format('L')),
        this.splitdate(this.startdate)
        
        this.policyService.findPolicy(this.result[0].policy.describe)
       
        this.updateForm.patchValue({
        firstname:this.result[0].firstname.toUpperCase(),
        lastname:this.result[0].lastname.toUpperCase(),
        phone:this.result[0].phone,
        address:{
          street:this.result[0].address.street,
          city:this.result[0].address.city
        },
        policy:{
          selectPolicy:this.selectPolicy.label,
          idpolicy:this.result[0].policy.idpolicy,
          values:this.result[0].policy.value,
          
          day:this.day,
          month:this.month,
          year:this.year,
          duration:this.result[0].policy.duration,          
          warning:this.result[0].policy.warning 
        },
        additional:this.result[0].additional, 
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
    const describe2= this.updateForm.get('policy.selectPolicy')
    const idpolicy2= this.updateForm.get('policy.idpolicy')
    const value2= this.updateForm.get('policy.values')
    const day2= this.updateForm.get('policy.day')
    const month2= this.updateForm.get('policy.month')
    const year2 = this.updateForm.get('policy.year')
    const duration2= this.updateForm.get('policy.duration')    
    const additional2= this.updateForm.get('additional')
    const warning2= this.updateForm.get('policy.warning')
    const recommendation2= this.updateForm.get('recommendation')    
    const note2= this.updateForm.get('note') 
    
    const newClient = {
    firstname :firstname2.value.toLowerCase(),
    lastname : lastname2.value.toLowerCase(),
    phone:  phone2.value,
    street: street2.value,      
    city: city2.value,
    describe: describe2.value,
    idpolicy: idpolicy2.value,
    value: value2.value,
    startdate:month2.value+"/"+day2.value+"/"+year2.value,
    duration: duration2.value,
    additional: additional2.value,
    warning: warning2.value,    
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