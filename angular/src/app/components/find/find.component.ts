import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'
import { trigger, state, style,animate, transition, group} from '@angular/animations'
import {  Validators } from '@angular/forms'

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
          transform: 'translate(150px,25px)'
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
  

    constructor(
      private authService:AuthService,
      private router:Router) { }

    ngOnInit() { 
      
    }

    onFindSubmit(){

       const search = {
       firstname: this.firstname      
      }
      
      this.authService.postFind(search)
      .subscribe(result => this.result = result)
      
  }

   onSelect(client) {     
    //  console.log(client._id)
    this.router.navigate(['/update', client._id]);
  }

    ngAfterViewInit(){
      

    }
  

}
