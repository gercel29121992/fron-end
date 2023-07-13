import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { paginacion } from 'src/app/seguridad/seguridad';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-list-user-app',
  templateUrl: './list-user-app.component.html',
  styleUrls: ['./list-user-app.component.css'],
  
})
export class ListUserAppComponent implements OnInit {
  listFiltered: any;
  displayedColumns: string[] = [ 'Email', 'Nombre', 'Apellido','Estado','Bloquear'];
  

  constructor(private seguridadService: SeguridadService,MatProgressBarModule:MatProgressBarModule,
    private router: Router) { }
    paginacion:paginacion={paginas:1,record:1};

user:any
searchTerm$ = new Subject<string>();
  ngOnInit(): void {
           this.update() }
  
  
  
update()  {
    this.seguridadService.obtenerUsuarios(1,10)
    .subscribe(users =>{this.user=users.body;
      this.listFiltered = this.user;
      console.log(this.user);}
    ,error=> console.error(error));
    
   
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
