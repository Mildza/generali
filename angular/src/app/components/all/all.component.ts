import { Component, OnInit, DoCheck } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router, ActivatedRoute, Params} from '@angular/router'
import { trigger,
        state,
        style,
        animate,
        transition
      } from '@angular/animations';
import {StorageService} from '../../services/storage.service'
import {CapitalizePipe} from '../../pipes/capitalize.pipe'


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
      transition('show => hide', animate('300ms ease-in'))   
  ])
]
})

export class AllComponent implements OnInit {

  owner: String
  
  message: any;
  
  public client = {
     state:"hide"
  }
  
  result: {}
      
  constructor(
    private authService:AuthService,
    private router:Router,
    private route: ActivatedRoute,
    private storageService: StorageService
   ){ }

//  const id = this.route.snapshot.params['id']

  ngOnInit() {
    this.owner = this.storageService.getStorage() 
    this.authService.getAll(this.owner)
    .subscribe(result => this.result = result) 
  }  

  upp(string){
    return string.toUpperCase()
  }
    
    clicked(client, index) {        
      this.result[index].state = (this.result[index].state === 'show' ? 'hide' : 'show');
                      
    }     
  
}
