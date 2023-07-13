import { Component, OnInit } from '@angular/core';
import { credencialesUsuario, credencialesUsuarioedit } from '../seguridad';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-modificar-login-app',
  templateUrl: './modificar-login-app.component.html',
  styleUrls: ['./modificar-login-app.component.css']
})
export class ModificarLoginAppComponent implements OnInit {

  constructor(private seguridadService: SeguridadService) { }
  errores: string[] = [];
  ngOnInit(): void {

  }
edit(credenciales: credencialesUsuario)
{
  console.log(credenciales)
  this.seguridadService.edit(credenciales)
  .subscribe(respuesta => {
    console.log(respuesta);
    
   
    
  }, errores => this.errores );

}


}
