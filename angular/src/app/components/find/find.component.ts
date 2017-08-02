import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'
import { trigger, state, style,animate, transition, group} from '@angular/animations'
import {  Validators } from '@angular/forms'
import {StorageService} from '../../services/storage.service'
import {FlashMessagesService} from 'angular2-flash-messages'
import {ValidateService} from '../../services/validate.service'

declare var $:any;

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css'],
   animations: [
  trigger('itemAnim', [
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate(350)
    ]),
    transition(':leave', [
      group([
        animate('0.2s ease', style({
          transform: 'translate(1150px,25px)'
        })),
        animate('0.5s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])
]
})
export class FindComponent implements OnInit {

  firstname: String
  result: {}
  id: String
  update : {}
  client: {}
  owner: String
  user: String
  count:number

    constructor(
      private authService:AuthService,
      private router:Router,
      private flashMessage: FlashMessagesService ,
      private storageService: StorageService,
      private validateService: ValidateService
) { }

    ngOnInit() { 
      this.owner = this.storageService.getStorage()
      this.count = 0      
    }

    onFindSubmit(){

       const search = {
       firstname: this.validateService.toLowerCase(this.firstname),
       user: this.owner    
      }
      
       this.authService.postFind(search)
      .subscribe(result => {
      if(result.success){
        this.flashMessage.show('Nema takvog klijenta', {cssClass: 'alert-danger', timeout: 3000})
        this.result = 0
        this.count = 0
        
      } else {
        this.result = result
        this.count = Object.keys(this.result).length;
        console.log(this.count)
        
      }
      })
  }

   onSelect(client) {     
    //  console.log(client._id)
    this.router.navigate(['/update', client._id]);
  }

    ngAfterViewInit(){
      

    }
  

}
