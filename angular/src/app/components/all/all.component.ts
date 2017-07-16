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

  owner: String
  newowner: String
  changeDetected = false
  
  
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
    private route: ActivatedRoute,
    private storageService: StorageService


    
    ){ }

//  const id = this.route.snapshot.params['id']

  ngOnInit() {
        this.owner = this.storageService.getStorage() 
        this.newowner = this.owner
    this.authService.getAll(this.newowner)
    .subscribe(result => this.result = result)     
  }  
ngDoCheck() {

    if (this.owner !== this.newowner) {
      this.changeDetected = true;
      console.log('DoCheck: Hero name changed to "$');
      this.newowner = this.owner
       this.authService.getAll(this.newowner)
    .subscribe(result => this.result = result) 
    }
}
      clicked(client, index) {        
        this.result[index].state = (this.result[index].state === 'show' ? 'hide' : 'show');
                       
      }     
  
}
