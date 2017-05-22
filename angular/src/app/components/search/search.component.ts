import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  client: {
    firstname: String,
    lastname: String
  }

  constructor(
    private authService:AuthService,
    private router:Router) { }

  ngOnInit() {
    this.authService.getSearch().subscribe(data => {
      this.client = data.client
      this.client.firstname = data.client.firstname        
    },
    err => {
      console.log(err)
      return false
    })
  }

}
