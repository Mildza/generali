import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { AllComponent } from './components/all/all.component';
import { FindComponent } from './components/find/find.component';
import { UpdateComponent } from './components/update/update.component';


import {ValidateService} from './services/validate.service'
import {AuthService} from './services/auth.service'
import {FlashMessagesModule} from 'angular2-flash-messages'
import {AuthGuard} from './guards/auth.guard';
import {StorageService} from './services/storage.service'
import {CapitalizePipe} from './pipes/capitalize.pipe'
import {DatePipe} from './pipes/date.pipe'


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'find', component: FindComponent},
  {path:'all', component: AllComponent, canActivate:[AuthGuard]},  
  {path:'search', component: SearchComponent, canActivate:[AuthGuard]},
  {path:'all/:user', component: AllComponent, canActivate:[AuthGuard]},
  {path:'update', component: UpdateComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: '404', component: HomeComponent},
  {path: '**',redirectTo: '/404'},
  
   
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SearchComponent,
    AllComponent,
    FindComponent,
    UpdateComponent,
    CapitalizePipe,
    DatePipe 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    
    
  ],
  providers: [ValidateService, AuthService, AuthGuard, StorageService],
  bootstrap: [AppComponent],

})
export class AppModule { }
