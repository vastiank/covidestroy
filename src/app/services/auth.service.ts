import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map, first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';

  private API_KEY = 'AIzaSyD4WrgRqwLnry2iGsRlSvf2vjGmGgZUNF8';

  private urlVerificationEmail = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=';

  userToken: string;
  //CREAR NUEVO USUARIO
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  //INICIAR SESION
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http: HttpClient, public auth: AngularFireAuth) { }

  public user: User

  private usuario: UsuarioModel;

  verifyEmailAddress(actionCode){

    this.auth.applyActionCode(actionCode).then( resp => {

      console.log("Verified");

    });    
  }

  

  
  
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('expira');

  }

  logIn(usuario: UsuarioModel) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}:signInWithPassword?key=${this.API_KEY}`,
      authData
    ).pipe(
      map(resp => {
        console.log("Entro en el mapa del rxjs")
        this.saveToken(resp['idToken']);
        return resp;
      })
    );

  }

  NuevoUsuario(usuario: UsuarioModel) {

    //this.sendVerification();

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}:signUp?key=${this.API_KEY}`,
      authData
    ).pipe(
      map(resp => {
        console.log("Entro en el mapa del rxjs")
        this.saveToken(resp['idToken']);
        return resp;

      })

    );


  }

  saveToken(idToken: string) {

    this.userToken = idToken;

    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime().toString());

  }

  readToken() {

    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado(): boolean {

    /*
    if (this.userToken.length < 2){
      return false;
    }
    */

    const expira = Number(localStorage.getItem('expira'));

    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }

  sendEmail() {

    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${this.API_KEY}`,
      {
        "requestType": "VERIFY_EMAIL",
        "idToken": this.userToken
      }
    );

  }

  confirmEmail() {
    
    /*return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${this.API_KEY}`,
      {
        "oobCode": "[VERIFICATION_CODE]"
      }
    )*/

    return this.http.post(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/getOobConfirmationCode`,
      {

      }
    )
    


  }

  

  getData() {
    return this.http.get('https://api.covid19api.com/summary');
  }


}
