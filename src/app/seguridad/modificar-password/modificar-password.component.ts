import { Component, OnInit } from '@angular/core';
import { credencialesUsuario } from '../seguridad';
import { SeguridadService } from '../seguridad.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-modificar-password',
  templateUrl: './modificar-password.component.html',
  styleUrls: ['./modificar-password.component.css']
})
export class ModificarPasswordComponent implements OnInit {
  public isloading=false;
  constructor(private seguridadService: SeguridadService) { }
  errores: string[] = [];
  ngOnInit(): void {
  }

  edit(credenciales: credencialesUsuario)
{
  this.isloading=true
  console.log(credenciales)
  this.seguridadService.editpass(credenciales).subscribe(respuesta => {   this.isloading=false; console.log(respuesta);}, errores => this.errores=parsearErroresAPI(errores)  );
  this.isloading=false;

}

}
