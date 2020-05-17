import { Component, OnInit, Input } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';
import { UsuarioDB } from 'src/app/models/usuariodb.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarUsuario = false;

  userData:UsuarioDB = new UsuarioDB();

  constructor(private auth:AuthService, private router:Router, private userService:UserService) { }

  @Input() usuarioOb: any;

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit( form:NgForm ){

    if (form.invalid) {return;}

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere porfavor...',
    })
    Swal.showLoading();
    

    console.log("Formulario");
    console.log(this.usuario);
    console.log(form);

    this.auth.NuevoUsuario(this.usuario)
        .subscribe( resp => {

          Swal.close();
          console.log(resp);
          
          /*
          //Send Email Verification
          this.auth.sendEmail().subscribe( (resp:UsuarioModel) => {
            this.usuario.email = resp.email;
          })
          */
          
          //this.router.navigateByUrl('/home');

          this.router.navigate(['/send']);

          if (this.recordarUsuario) {
            localStorage.setItem('userEmail', this.usuario.email);
          }


        }, (err) => {

          console.log(err.error.error.message); 
          
          if (err.error.error.message === "EMAIL_EXISTS"){
            Swal.fire({
              icon: 'error',
              title: 'Error al crear cuenta',
              text: 'LA CUENTA YA EXISTE',
            })

          }
        });


        this.userService.createUserData(this.userData).subscribe( resp => {

          console.log('Se ha creado registro de usuario en Firebase!!!');
        });

  }

  

}
