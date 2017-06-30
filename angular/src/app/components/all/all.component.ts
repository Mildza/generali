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

  
   state: String = "hide"
  
   show:boolean = false
    public result:Array<any> = [{
    show: false
  }]
   
  constructor(
    private authService:AuthService,
    private router:Router,
    ){ }

  ngOnInit() {
    this.authService.getAll()
    .subscribe(result => this.result = result)  
    // console.log("Success") 
    
  }

  

      clicked(client, index) {

        console.log(index)
              console.log(this.result[index].show)
        this.result[index].show = !this.result[index].show;
              console.log(this.result[index].show)
      }
        // this.show = !this.show

      


    toggleState(i) {
      console.log(i)
      this.state = (this.state === 'show' ? 'hide' : 'show');
    }
  
}
