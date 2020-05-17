import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioDB } from '../models/usuariodb.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private url = 'https://bd-covid.firebaseio.com/users';


  createUserData(user:UsuarioDB){

    return this.http.post(
      `${this.url}.json`,
      user
    ).pipe(
      map( (resp:any) => {

        user.id = resp.name;
        return user;
      } )
    ) 
  }
}


