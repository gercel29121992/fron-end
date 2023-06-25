import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productoCreacionDTO, productoDTO } from '../productos';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute ,private router: Router,private productosService: ProductosService ) { }
modelo: productoDTO  ;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{

    this.productosService.obtenerPorId(params.id)
    .subscribe(productos =>{
      this.modelo=productos;
     
      }
    );
  })

 
 
   
  }

  guardarCambios(producto: productoCreacionDTO) {
    if(producto.nombre){
      //(producto.foto);
      this.productosService.editar(this.modelo.id,producto).subscribe(
        () => {
          this.router.navigate(['/productos']);
        }
      );


    }
   
  }
}
