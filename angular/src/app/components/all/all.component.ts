import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

   result:{}
   

  constructor(
    private authService:AuthService,
    private router:Router){ }

  ngOnInit() {
    this.authService.getAll()
    .subscribe(result => this.result = result)  
    // console.log("Success") 
  }
}
