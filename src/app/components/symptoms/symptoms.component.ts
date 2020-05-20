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

    

    

  }

  activeChecked1: boolean;
  activeChecked2: boolean;
  activeChecked3: boolean;
  activeChecked4: boolean;
  activeChecked5: boolean;
  activeChecked6: boolean;
  activeChecked7: boolean;
  activeChecked8: boolean;
  activeChecked9: boolean;
  noneChecked: boolean;

  totalResults: number = 0;
  sumResults: number = 0;

  //FIEBRE
  ckb1: boolean = false;
  ckFiebre: number = 0;
  disabled: boolean = false;

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

    console.log(this.ckb1)


    if (!this.ckb1) {

      this.ckb1 = true;
      
      this.ckFiebre = 10;
      //console.log(this.ckb1);
      //console.log(this.ckFiebre);

    } else {
      this.ckb1 = false;
      //console.log(this.ckb1);
    }

    this.noneChecked = false;

  }

  garganta() {

    console.log(this.ckb2);
    if (!this.ckb2) {
      this.ckb2 = true;
      this.ckGarganta = 10;
    } else {
      this.ckb2 = false;
    }

    this.noneChecked = false;


  }

  congestion() {


    if (!this.ckb3) {
      this.ckb3 = true;
      this.ckCongestion = 0;
    } else {
      this.ckb3 = false;
    }

    this.noneChecked = false;


  }

  tos() {




    if (!this.ckb4) {
      this.ckb4 = true;
      this.ckTos = 10;
    } else {
      this.ckb4 = false;
    }

    this.noneChecked = false;


  }

  dificultad() {


    if (!this.ckb5) {
      this.ckb5 = true;
      this.ckDificultad = 20;
    } else {
      this.ckb5 = false;
    }

    this.noneChecked = false;


  }

  fatiga() {


    if (!this.ckb6) {
      this.ckb6 = true;
      this.ckFatiga = 10;
    } else {
      this.ckb6 = false;
    }

    this.noneChecked = false;


  }

  escalofrio() {


    if (!this.ckb7) {
      this.ckb7 = true;
      this.ckEscalofrio = 0;
    } else {
      this.ckb7 = false;
    }

    this.noneChecked = false;


  }

  pecho() {


    if (!this.ckb8) {
      this.ckb8 = true;
      this.ckPecho = 20;
    } else {
      this.ckb8 = false;
    }

    this.noneChecked = false;


  }

  incapacidad() {


    if (!this.ckb9) {
      this.ckb9 = true;
      this.ckIncapacidad = 20;
    } else {
      this.ckb9 = false;
    }

    this.noneChecked = false;

  }

  disableAllCheckboxes() {



    this.activeChecked1 = false;
    this.ckFiebre = 0;

    this.activeChecked2 = false;
    this.ckGarganta = 0;

    this.activeChecked3 = false;
    this.ckCongestion = 0;

    this.activeChecked4 = false;
    this.ckTos = 0;

    this.activeChecked5 = false;
    this.ckDificultad = 0;

    this.activeChecked6 = false;
    this.ckFatiga = 0;

    this.activeChecked7 = false;
    this.ckEscalofrio = 0;

    this.activeChecked8 = false;
    this.ckPecho = 0;

    this.activeChecked9 = false;
    this.ckIncapacidad = 0;

    this.totalResults = 0;


  }


  testResult() {

    


    this.totalResults =
      this.ckFiebre + this.ckGarganta +
      this.ckCongestion + this.ckTos +
      this.ckDificultad + this.ckFatiga +
      this.ckEscalofrio + this.ckPecho +
      this.ckDificultad;



    console.log(this.totalResults);




    if (this.totalResults > 60) {

      Swal.fire({
        title: 'ALERTA',
        text: 'Se recomienda hacer prueba del COVID19',
        icon: 'error'
      })

      setTimeout(() => {

        this.router.navigate(['/info']);

      }, 2000);

    } else if (this.totalResults > 0 && this.totalResults <= 60) {

      Swal.fire({
        title: 'CUIDADO',
        text: 'Hasta el momento tus sintomas no son asociados con un posible contagio, Te recomendamos estar en constante monitoreo',
        icon: 'warning'

      })

      setTimeout(() => {
        this.router.navigate(['/care']);
      }, 2000);

    } else if (this.totalResults == 0) {

      Swal.fire({
        title: 'NO PRESENTAS SINTOMAS',
        text: 'Actualmente no registras sintomas, Te invitamos a estar en constante monitoreo',
        icon: 'success'
      })

      setTimeout(() => {
        this.router.navigate(['/care']);
      }, 2000);
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


  

}
