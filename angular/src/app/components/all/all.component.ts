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
    trigger('showing', [
    state('show', style({
      display:"block"
     
    })),
    state('hide', style({
      display:"none"
    })),
    transition('show => hide', animate('100ms ease-in')),
    transition('hide => show', animate('100ms ease-out'))
  ])
]
})


export class AllComponent implements OnInit {

   result:{}
   state: String = "hide"

  constructor(
    private authService:AuthService,
    private router:Router,
    ){ }

  ngOnInit() {
    this.authService.getAll()
    .subscribe(result => this.result = result)  
    // console.log("Success") 
  }

  toggleState() {
      this.state = (this.state === 'show' ? 'hide' : 'show');
    }
  
}
