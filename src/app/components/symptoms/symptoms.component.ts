import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  sintomas = {
    fiebre: ''
  }

  onSubmit(ref:NgForm){


    if (ref.invalid){
      Object.values(ref.controls).forEach( control => {
        control.markAsTouched();
      });
      return;
    }

    console.log(ref.value);

    

  }


  cerrarSesion() {

    this.auth.logOut();
    this.router.navigateByUrl('/login');

  }

}
