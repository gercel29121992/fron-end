import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { tallaDTO } from '../talla';
import { TallaService } from '../talla.service';

@Component({
  selector: 'app-list-talla',
  templateUrl: './list-talla.component.html',
  styleUrls: ['./list-talla.component.css']
})
export class ListTallaComponent implements OnInit {

  constructor(private router: Router, private tallaService: TallaService ) { }
  @Input()
  tallas;
  ngOnInit(): void {
    this.tallaService.obtenerTodos()
    .subscribe(talla =>{this.tallas=talla;
      console.log(talla);}
    ,error=> console.error(error));
    
  }
  editar(id:number)
  {
  
    this.router.navigate(['/talla/editar/'+id]);
  }

  borrar(iditem,idbase){
    Swal.fire({
      title: 'Desea Eliminar el Registro',
      text: "No es reversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.tallaService.borrar(idbase)
        .subscribe(talla =>{
          this.tallas.splice(iditem,1);
          }
        ,error=> console.error(error));

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Eliminado!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })

    
    

  
  }

}
