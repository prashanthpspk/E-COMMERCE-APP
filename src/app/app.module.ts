import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes:Routes = [
  {path:'', component:HomeComponent},
  {path:'signup', component:SignUpComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
