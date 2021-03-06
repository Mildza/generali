import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { trigger, state, style, animate, transition } 
from '@angular/animations'
import { StorageService } from '../../services/storage.service'
import { UserService } from '../../services/user.service'
import { CapitalizePipe } from '../../pipes/capitalize.pipe'
import { DatePipe } from '../../pipes/date.pipe'
import * as moment from 'moment'

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

  message: any
  sudouser: String

  public client = {
     state:"hide",
     show: true
  }
  
  show: boolean = true
  result: {}  

  constructor(
    private authService:AuthService,
    private router:Router,
    private route: ActivatedRoute,
    private storageService: StorageService,
    private userService: UserService
    
   ){
      this.userService.sudouser.subscribe(sudouser => {
      this.sudouser = sudouser
      })  
    }

  ngOnInit() {

    this.authService.getAll(this.sudouser || this.storageService.getStorage())
    .subscribe(result => this.result = result
    )
        
  }  

    
  upp(string){
    return string.toUpperCase()
  }
    
  clicked(client, index) {        
    this.result[index].state = (this.result[index].state === 'show' ? 'hide' : 'show');
    this.result[index].show = (this.result[index].show === true ? false : true)                  
  }

  ellapsedTime(time){
    var startday = (moment(time).format('L'))
    var res = startday.split("/")     
    var month = res[0]
    var months = Number(month)-1
    var day = res[1]
    var year = res[2]
    var rest= moment([year, months, day]).toNow(true)
    rest = rest.replace("months", "meseci")
    rest = rest.replace("days", "dana")
    rest = rest.replace("years", "godina")
    rest = rest.replace("a month", "mesec dana")
    return rest
  } 
  
}
