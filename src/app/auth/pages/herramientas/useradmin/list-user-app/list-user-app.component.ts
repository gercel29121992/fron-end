import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { paginacion } from 'src/app/seguridad/seguridad';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-list-user-app',
  templateUrl: './list-user-app.component.html',
  styleUrls: ['./list-user-app.component.css'],
  
})
export class ListUserAppComponent implements OnInit {
  listFiltered: any;
  displayedColumns: string[] = [ 'Email', 'Nombre', 'Apellido','Estado','Bloquear'];
  errores: string[] = [];
  

  constructor(private seguridadService: SeguridadService,MatProgressBarModule:MatProgressBarModule,
    private router: Router) { }
    paginacion:paginacion={paginas:1,record:1};
    public isloading=false;
user:any
searchTerm$ = new Subject<string>();
  ngOnInit(): void {
           this.update() }
  
  
  
update()  {
  this.isloading=true;
    this.seguridadService.obtenerUsuarios(1,10)
    .subscribe(users =>{this.user=users.body;
      this.isloading=false;
      this.listFiltered = this.user;
      console.log(this.user);}
    ,error=>{ 
      this.errores=parsearErroresAPI(error)
      this.isloading=false;}  );
    
    
   
    this.filterList();
  }


  filterList(): void {
    this.searchTerm$.subscribe(term => {
      this.listFiltered = this.user
        .filter(item => item.email.toLowerCase().indexOf(term.toLowerCase()) >= 0);
    });
  }
bloq(id)
{
  this.seguridadService.bloq(id)
  .subscribe(users =>{
    this.update()
    
    console.log(users);}
  ,error=> console.error(error));
  
}
}
