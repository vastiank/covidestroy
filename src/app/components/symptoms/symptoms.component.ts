import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

    
    this.disabled = true;

  }

  sintomas = {
    fiebre: ''

  }

  totalResults: number = 0;
  sumResults:number = 0;

  //FIEBRE
  ckb1: boolean = false;
  ckFiebre: number = 0;
  disabled:boolean = false;

  //DOLOR DE GARGANTA
  ckb2: boolean = false;
  ckGarganta: number = 0;

  //CONGESTION
  ckb3: boolean = false;
  ckCongestion: number = 0;

  //TOS
  ckb4: boolean = false;
  ckTos: number = 0;

  //DIFICULTAD
  ckb5: boolean = false;
  ckDificultad: number = 0;

  //FATIGA
  ckb6: boolean = false;
  ckFatiga: number = 0;

  //ESCALOFRIO
  ckb7: boolean = false;
  ckEscalofrio: number = 0;

  //PECHO
  ckb8: boolean = false;
  ckPecho: number = 0;

  //INCAPACIDAD
  ckb9: boolean = false;
  ckIncapacidad: number = 0;

  //NINGUNO
  ckb10: boolean = false;
  ckNinguno: number = 0;

  fiebre() {

    if (!this.ckb1) {
      this.ckb1 = true;
      this.ckFiebre = 10;
    } else {
      this.ckb1 = false;
    }
    console.log(this.ckb1)
  }

  garganta() {

    if (!this.ckb2) {
      this.ckb2 = true;
      this.ckGarganta = 10;
    } else {
      this.ckb2 = false;
    }
    console.log(this.ckb2)


  }

  congestion() {

    if (!this.ckb3) {
      this.ckb3 = true;
      this.ckCongestion = 0;
    } else {

      this.ckb3 = false;

    }
    console.log(this.ckb3)

  }

  tos() {

    if (!this.ckb4) {
      this.ckb4 = true;
      this.ckTos = 10;
    } else {

      this.ckb4 = false;

    }
    console.log(this.ckb4)



  }

  dificultad() {

    if (!this.ckb5) {
      this.ckb5 = true;
      this.ckDificultad = 20;
    } else {

      this.ckb5 = false;

    }
    console.log(this.ckb5)



  }

  fatiga() {

    if (!this.ckb6) {
      this.ckb6 = true;
      this.ckFatiga = 10;
    } else {

      this.ckb6 = false;

    }
    console.log(this.ckb6)





  }

  escalofrio() {

    if (!this.ckb7) {
      this.ckb7 = true;
      this.ckEscalofrio = 0;
    } else {

      this.ckb7 = false;

    }
    console.log(this.ckb7)


  }

  pecho() {


    if (!this.ckb8) {
      this.ckb8 = true;
      this.ckPecho = 20;
    } else {

      this.ckb8 = false;

    }
    console.log(this.ckb8)


  }

  incapacidad() {

    if (!this.ckb9) {
      this.ckb9 = true;
      this.ckIncapacidad = 20;
    } else {

      this.ckb9 = false;

    }
    console.log(this.ckb9)






  }

  ninguno() {

    if (!this.ckb10) {
      this.ckb10 = true;
      this.ckNinguno = 0;
    } else {

      this.ckb10 = false;

    }
    console.log(this.ckb10)

    

    


  }

  
  testResult() {

    this.sumResults =
    this.ckFiebre + this.ckGarganta +
    this.ckCongestion + this.ckTos +
    this.ckDificultad + this.ckFatiga +
    this.ckEscalofrio + this.ckPecho +
    this.ckDificultad;

    console.log(this.sumResults);
    this.totalResults = this.sumResults;

    if (this.totalResults >= 60) {

      Swal.fire({
        title: 'Cuidado',
        text: 'Se recomienda hacer prueba del COVID19',
        icon: 'warning'
      })

      setTimeout(() => {

        this.router.navigate(['/info']);

      },2000);

    } else {

      Swal.fire({
        title: 'No hay nada de que preocuparse',
        text: 'Sigue monitoreando tus sintomas constantemente',
        icon: 'success'

      })

      setTimeout(() => {

        this.router.navigate(['/care']);

      },2000);

      

    }


    

  }

 




  onSubmit(ref: NgForm) {


    if (ref.invalid) {
      Object.values(ref.controls).forEach(control => {
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
