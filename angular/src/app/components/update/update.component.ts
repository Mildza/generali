import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router, ActivatedRoute, Params} from '@angular/router'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  
  result: {} 

  constructor(
    private authService:AuthService,
    private route: ActivatedRoute,
    private router:Router
    ) {}

  bankName: String;
  

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    
    console.log(id)
  }
}
