import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any
  user: any
  client: any

  constructor(private http:Http) {
    
   }

  registerUser(user) {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
      .map(res => res.json())
  }

  addClient(client) {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/clients/dashboard', client, {headers: headers})
      .map(res => res.json())
  }

  // updateClient(client) {
  //   let headers = new Headers()
  //   headers.append('Content-Type', 'application/json')
  //   return this.http.post('clients/rewrite', client, {headers: headers})
  //     .map(res => res.json())
  // }

updateClient(id, client) { 
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/clients/update/'+ id, client, {headers: headers})
      .map(res => res.json())
  }

deleteClient(id) { 
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.delete('http://localhost:3000/clients/update/'+ id, {headers: headers})
      .map(res => res.json())
  }
//   return this.http.post('http://localhost:3000/clients/rewrite', client, {headers: headers})

  // updateClient2(client) {
  
  //   let headers = new Headers()
  //   headers.append('Content-Type', 'application/json')
  //   return this.http.post('http://localhost:3000/clients/updated', client, {headers: headers})
  //     .map(res => res.json())
  // }


  postFind(search){
         
    let headers = new Headers()    
    // this.loadToken()
    // headers.append('Authorization', this.authToken)
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/clients/find', search, {headers: headers})
      .map(res => res.json())
  }

  getUpdate(id){          
      let headers = new Headers()    
      // this.loadToken()
      // headers.append('Authorization', this.authToken)
      headers.append('Content-Type', 'application/json')
      return this.http.get('http://localhost:3000/clients/update/'+ id,{headers: headers})
        .map(res => res.json())
    }



  authenticateUser(user){
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
      .map(res => res.json())
  }

  checkUser(username){
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/users/checkuser/' + username, {headers: headers})
      .map(res => res.json())
  }

  getProfile(){
    let headers = new Headers()
    this.loadToken()
    headers.append('Authorization', this.authToken)
    headers.append('Content-Type', 'application/json')
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
      .map(res => res.json())
  }
  

  getAll(login){
    let headers = new Headers()
    this.loadToken()
    headers.append('Authorization', this.authToken)
    headers.append('Content-Type', 'application/json')
    return this.http.get('http://localhost:3000/clients/all/'+login, {headers: headers})
      .map(res => res.json())
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token)
    localStorage.setItem('user', JSON.stringify(user))
    this.authToken = token
    this.user = user    
  }

  loadToken(){
    const token = localStorage.getItem('id_token')
    this.authToken = token
  }

  loggedIn(){    
    return tokenNotExpired("id_token");           
  }

  logout(){
    this.authToken = null
    this.user = null
    localStorage.clear()
  }

  

}
