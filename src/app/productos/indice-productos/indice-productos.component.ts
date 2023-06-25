import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-indice-productos',
  templateUrl: './indice-productos.component.html',
  styleUrls: ['./indice-productos.component.css']
})
export class IndiceProductosComponent implements OnInit {
@Input()
productos;
foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSughTXNoBc32Em0GJJAlGLTrnXJewj7oBVgA&usqp=CAU";
  constructor(private router: Router, private productosService: ProductosService) { }


  ngOnInit(): void {
    this.actualizarlistado();
   
  }
  editar(id)
  {
   
    this.router.navigate(['/productos/editar/'+id]);
  }
 
borrar(iditem,idbase){
  this.productosService.borrar(idbase)
  .subscribe(productos =>{
    this.productos.splice(iditem,1);
    console.log(productos);}
  ,error=> console.error(error));
  this.actualizarlistado();

}
actualizarlistado()
{
  this.productosService.obtenerTodoscontalla()
  .subscribe(productos =>{
    this.productos=productos;
    console.log(productos);}
  ,error=> console.error(error));



}
}
