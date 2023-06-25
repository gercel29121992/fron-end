import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { tallaDTO } from '../talla';
import { TallaService } from '../talla.service';

@Component({
  selector: 'app-editar-talla',
  templateUrl: './editar-talla.component.html',
  styleUrls: ['./editar-talla.component.css']
})
export class EditarTallaComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
     private  router: Router,private tallaService: TallaService ) { }
  modelo: tallaDTO  ;
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{

      this.tallaService.obtenerPorId(params.id)
    .subscribe(talla =>{
      this.modelo=talla;
     
      }
    );
    })
  }



  guardarCambios(talla: tallaDTO) {
    if(talla.nombre){
      //(producto.foto);
      this.tallaService.editar(this.modelo.id,talla).subscribe(
        () => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'success!',
            showConfirmButton: false,
            timer: 1500
          })


         
          this.router.navigate(['/talla']);
        }
      ),error=> console.error(error);


    }
  }


}


function swal(arg0: { type: string; title: string; html: string; }) {
  throw new Error('Function not implemented.');
}

