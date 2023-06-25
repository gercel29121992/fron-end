import { Component, Input, OnInit } from '@angular/core';
import { TallaService } from 'src/app/talla/talla.service';

@Component({
  selector: 'app-listado-generico',
  templateUrl: './listado-generico.component.html',
  styleUrls: ['./listado-generico.component.css']
})
export class ListadoGenericoComponent implements OnInit {

  @Input()
  listado;
  constructor(private tallaService: TallaService) { }

  ngOnInit(): void {
  }


  borrar(iditem,idbase){
    this.tallaService.borrar(idbase)
    .subscribe(productos =>{
      this.listado.splice(iditem,1);
      console.log(productos);}
    ,error=> console.error(error));
   
  
  }

}
