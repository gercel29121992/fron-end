import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { credencialesUsuario } from 'src/app/seguridad/seguridad';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent implements OnInit {
  public isloading=false;

  constructor(private seguridadService: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
  }

  errores: string[] = [];

  registrar(credenciales: credencialesUsuario){
    console.log(credenciales)
    this.isloading=true;

    this.seguridadService.registrar(credenciales)
    .subscribe(respuesta => {
      console.log(respuesta);
      
      this.seguridadService.guardarToken(respuesta);
      this.router.navigate(['/']);
    }, errores => this.errores=parsearErroresAPI(errores)  );
    this.isloading=false;
  }

}
