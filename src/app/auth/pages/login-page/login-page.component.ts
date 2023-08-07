import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { credencialesUsuario } from 'src/app/seguridad/seguridad';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent implements OnInit {

  constructor(private seguridadService: SeguridadService, 
    private router: Router) { }
    public isloading=false;

    errores: string[] = [];

  ngOnInit(): void {
  }

  login(credenciales: credencialesUsuario){
    this.isloading=true;
    this.seguridadService.login(credenciales)
    .subscribe(respuesta => {
    this.isloading=false;

      this.seguridadService.guardarToken(respuesta);
      this.router.navigate(['/']);
    }, errores =>{ 
      this.errores=parsearErroresAPI(errores)
      this.isloading=false;}  );
    
  }

}