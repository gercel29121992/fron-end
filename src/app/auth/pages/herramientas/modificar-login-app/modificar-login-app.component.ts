import { Component, OnInit } from '@angular/core';
import { credencialesUsuario, credencialesUsuarioedit } from '../../../../seguridad/seguridad';
import { SeguridadService } from '../../../../seguridad/seguridad.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-modificar-login-app',
  templateUrl: './modificar-login-app.component.html',
  styleUrls: ['./modificar-login-app.component.css']
})
export class ModificarLoginAppComponent implements OnInit {

  constructor(private seguridadService: SeguridadService) { }
  errores: string[] = [];
  public isloading=false;
  ngOnInit(): void {

  }
edit(credenciales: credencialesUsuario)
{
  this.isloading=true;
  console.log(credenciales)
  this.seguridadService.edit(credenciales)
  .subscribe(respuesta => {
    console.log(respuesta);
    this.isloading=false;
   
    
  }, errores => { 
    this.errores=parsearErroresAPI(errores)
    this.isloading=false;}  );
  
  }

}
