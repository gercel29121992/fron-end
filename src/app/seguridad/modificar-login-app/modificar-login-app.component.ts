import { Component, OnInit } from '@angular/core';
import { credencialesUsuario } from '../seguridad';

@Component({
  selector: 'app-modificar-login-app',
  templateUrl: './modificar-login-app.component.html',
  styleUrls: ['./modificar-login-app.component.css']
})
export class ModificarLoginAppComponent implements OnInit {

  constructor() { }
  errores: string[] = [];
  ngOnInit(): void {
  }
edit(credenciales: credencialesUsuario)
{
  console.log(credenciales)
}
}
