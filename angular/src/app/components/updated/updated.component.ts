import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'


@Component({
  selector: 'app-updated',
  templateUrl: './updated.component.html',
  styleUrls: ['./updated.component.css']
})
export class UpdatedComponent implements OnInit {

  client: {}

  constructor(
    private authService:AuthService,
    private route: ActivatedRoute,
    private router:Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
       
  }

}
