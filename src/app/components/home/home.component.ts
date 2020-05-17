import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CountriesService } from 'src/app/services/countries.service';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2'
import { UserService } from 'src/app/services/user.service';
import { UsuarioDB } from 'src/app/models/usuariodb.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: UsuarioDB = new UsuarioDB();

  constructor(private auth: AuthService,
    private _countries: CountriesService,
    private router: Router,
    private http: HttpClient,
    private userService: UserService) { }



  ngOnInit(): void {


    this.getArrayCountries();


    this._countries.getCountries().subscribe(resp => {

      this.countries = resp;

      this.countries.unshift({
        nombre: 'Seleccione un país',
        codigo: ''
      });

    })
  }

  countries: any[] = [];

  totalConfirmed: string;
  totalDeaths: string;
  totalRecovered: string;

  cerrarSesion() {

    this.auth.logOut();
    this.router.navigateByUrl('/login');

  }

  getArrayCountries() {
    this._countries.getCountries().subscribe(resp => { console.log(resp) });
  }

  onSubmit(form: NgForm) {


    
    /*
    Swal.fire({
      title: 'Espere',
      text: 'Guardando informacion',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();
*/

    

      this.userService.createUserData(this.user).subscribe(resp => {
        console.log("Registro creado");
      });

    

    console.log(form);

    
  }





}
