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
        transform: 'translateX(-100%)',
        display:'none'
      })),
      state('show',   style({
        transform: 'translateX(0)',
        display:'block'
      })),
      transition('hide <=> show', animate('200ms ease-in')),
      transition('show <=> hide', animate('200ms ease-out'))
  ])
]
})


export class AllComponent implements OnInit {

  
   
  
  //   public client:Array<any> = [{
     public state = 'hide'
    public client:Array<any> = [{
    state: "hide"
  }]
    
  
   condition:boolean = false
    public result:Array<any> = [{
    condition: false,
    state: "hide"
  }]
   
  constructor(
    private authService:AuthService,
    private router:Router,
    
    ){ }

  ngOnInit() {
    this.authService.getAll()
    .subscribe(result => this.result = result)  
    this.result= [{
    condition: false,
    state: "hide"
    }]
  }

  

      clicked(client, index) {
              
        this.result[index].condition = !this.result[index].condition;
        this.result[index].state = (this.result[index].state === 'show' ? 'hide' : 'show');
        // console.log(this.result[index].condition)
        // console.log(this.result[index].state)
        // this.result[index].state = !this.result[index].state;
        // this.result[index].state = (!this.result[index].state === 'hide' ? 'hide' : 'show');
        
        
              
      }
        // this.show = !this.show

      


    // toggleState(i) {
    //   console.log(i)
    //   this.state = (this.state === 'show' ? 'hide' : 'show');
    // }
  
}
