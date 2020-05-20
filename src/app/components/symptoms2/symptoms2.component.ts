import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-symptoms2',
  templateUrl: './symptoms2.component.html',
  styleUrls: ['./symptoms2.component.css']
})
export class Symptoms2Component implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  activeChecked1:boolean;
  activeChecked2:boolean;
  activeChecked3:boolean;
  activeChecked4:boolean;
  activeChecked5:boolean;
  noneChecked:boolean;

  disableAllCheckboxes(){

    this.activeChecked1 = false;
    this.activeChecked2 = false;
    this.activeChecked3 = false;
    this.activeChecked4 = false;
    this.activeChecked5 = false;
  }
  
  disableNone(){this.noneChecked = false;}

  

}
