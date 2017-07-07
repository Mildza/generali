import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'
import { trigger,
        state,
        style,
        animate,
        transition
      } from '@angular/animations';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
  
  animations: [
    trigger('clientState', [
     state('hide', style({
        transform: 'translateY(+100%)',
        display:'none',
        opacity:'0'
      })),
      state('show',   style({
        transform: 'translateY(0)',
        display:'block',
        opacity:'1'
      })),
      transition('hide => show', animate('500ms ease-in')),
      transition('show => hide', animate('300ms ease-in')),
      
     
  ])
]
})

export class AllComponent implements OnInit {

  
   public client = {
     state:"hide"
   }
  //   public client:Array<any> = [{
  //   state: "hide"
  // }]
//   public result:Array<any> = [{
// -    condition: false,
// -    state: "hide"
// -  }]

  result: {}
      
  constructor(
    private authService:AuthService,
    private router:Router,
    
    ){ }

  ngOnInit() {
    this.authService.getAll()
    .subscribe(result => this.result = result)     
  }  

      clicked(client, index) {        
        this.result[index].state = (this.result[index].state === 'show' ? 'hide' : 'show');
                       
      }     
  
}
