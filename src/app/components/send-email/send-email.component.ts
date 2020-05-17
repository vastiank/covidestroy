import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  constructor(private auth:AuthService) { }

  usuario:UsuarioModel;

  emailAddress:string;

  ngOnInit(): void {

    this.usuario = new UsuarioModel();

    this.auth.sendEmail().subscribe( (resp:UsuarioModel) => {
      
      this.usuario.email = resp.email;
  
      console.log(this.usuario.email);
  
      this.emailAddress = this.usuario.email;

      
    })
  }

}
