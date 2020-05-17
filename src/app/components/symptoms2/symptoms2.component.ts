import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-symptoms2',
  templateUrl: './symptoms2.component.html',
  styleUrls: ['./symptoms2.component.css']
})
export class Symptoms2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  method(){

    
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      title: 'SUPER BIEN!',
      text: 'Actualmente no presentas ninguna afectación',
    });
  }

}
