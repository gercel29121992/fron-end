import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { paginacion } from 'src/app/seguridad/seguridad';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';

@Component({
  selector: 'app-list-user-app',
  templateUrl: './list-user-app.component.html',
  styleUrls: ['./list-user-app.component.css']
})
export class ListUserAppComponent implements OnInit {

  constructor(private seguridadService: SeguridadService,
    private router: Router) { }
    paginacion:paginacion={paginas:1,record:1};
user:any
  ngOnInit(): void {
    this.seguridadService.obtenerUsuarios(1,10)
    .subscribe(users =>{this.user=users.body;
      console.log(this.user);}
    ,error=> console.error(error));
   
  }


}
