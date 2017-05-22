import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
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
     console.log(client._id)
    this.router.navigate(['/update', client._id]);
  }


}
