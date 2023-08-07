import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { credencialesUsuario } from '../seguridad';
import { SeguridadService } from '../seguridad.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private seguridadService: SeguridadService, 
    private router: Router) { }
    public isloading=false;

    errores: string[] = [];

  ngOnInit(): void {
  }
}
