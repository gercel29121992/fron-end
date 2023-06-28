import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tallaCreacionDTO } from 'src/app/talla/talla';
import { productoCreacionDTO } from '../productos';


import { ProductosService } from '../productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent implements OnInit {

  constructor(private router: Router, private productosService: ProductosService) { }

  ngOnInit(): void {
  }
  guardarCambios(producto: productoCreacionDTO) {
   
    if(producto.nombre){

      this.productosService.crear(producto).subscribe(
        () => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'success!',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/productos']);
        }
      );

    }
   
  console.log(producto)
   
 
    
  }
}
