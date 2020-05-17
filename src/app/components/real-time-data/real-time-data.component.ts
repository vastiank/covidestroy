import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CountriesService } from 'src/app/services/countries.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-real-time-data',
  templateUrl: './real-time-data.component.html',
  styleUrls: ['./real-time-data.component.css']
})
export class RealTimeDataComponent implements OnInit {

  constructor(private auth: AuthService, private _countries: CountriesService, private http: HttpClient) { }

  countries: any[] = [];
  countryArray: any[] = [];
  indexCountry: number;

  colombia: string;

  colombiaConfirmed: string;
  colombiaDeaths: string;
  colombiaRecovered: string;

  totalConfirmed: string;
  totalDeaths: string;
  totalRecovery: string;



  ngOnInit(): void {

    this.LoadData();
    this.LoadDataColombia();


    this._countries.getCountries().subscribe(resp => {

      this.countries = resp;

      this.countries.unshift({
        nombre: 'Seleccione un país',
        codigo: ''
      });
    });

  }


  //Nos traemos la data del COVID19 API

  LoadData() {
    this.auth.getData()
      .subscribe(
        (resp: any) => {
          console.log(resp.Global);
          this.totalConfirmed = resp.Global.TotalConfirmed;
          this.totalDeaths = resp.Global.TotalDeaths;
          this.totalRecovery = resp.Global.TotalRecovered;

          console.log(resp.Global);
        }
      )
  }

  LoadDataColombia() {

    this._countries.getDataForCountry()
      .subscribe(
      (resp: any) => {

        this.indexCountry = resp.length;

        this.colombiaConfirmed = resp[(this.indexCountry - 1)].Confirmed;
        this.colombiaDeaths = resp[(this.indexCountry - 1)].Deaths;
        this.colombiaRecovered = resp[(this.indexCountry - 1)].Recovered;

      
        console.log(this.colombiaConfirmed);
        console.log(this.colombiaDeaths);
        console.log(this.colombiaRecovered);

        console.log(resp[(this.indexCountry - 1)]);

      }
    );


  }

  














}
