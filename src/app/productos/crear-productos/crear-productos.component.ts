import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tallaCreacionDTO } from 'src/app/talla/talla';
import { productoCreacionDTO } from '../productos';


import { ProductosService } from '../productos.service';

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
   

   
  console.log(producto)
   
 
    
  }
}
