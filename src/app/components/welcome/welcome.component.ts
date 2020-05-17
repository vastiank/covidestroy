import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  flagUserLogIn:boolean = true;
  flagUserSignOut:boolean;


  

  style: object = {};
  params: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit(): void {

    //this.auth.readToken()
    this.active();
    
  }

  active(){

    if (localStorage.getItem('token')){

      this.flagUserSignOut = true; 
      this.flagUserLogIn = false;

      
    } else {
      this.flagUserLogIn = true;
      this.flagUserSignOut = false; 

    }





  }

  cerrarSesion() {

    this.auth.logOut();
    this.router.navigateByUrl('/logIn');

  }





}
