import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generoCreacionDTO } from 'src/app/generos/genero';
import { tallaCreacionDTO } from 'src/app/talla/talla';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { productoCreacionDTO } from '../productos';


@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario-productos.component.html',
  styleUrls: ['./formulario-productos.component.css']
})
export class FormularioProductosComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;
 
  @Input()
  modelo: productoCreacionDTO;
 
  @Output()
  submit: EventEmitter<productoCreacionDTO> = new EventEmitter<productoCreacionDTO>();

  ngOnInit(): void { this.form = this.formBuilder.group({
    nombre: ['', {
      validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]
    }],
    precio: ['', {
      validators: [Validators.required, Validators.minLength(3)]
    }],
    foto: ['', {
      validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]
    }],
    tallas:''
  });
  

  if (this.modelo !== undefined){
    this.form.patchValue(this.modelo);
  }
}

archivoSeleccionado(file){
 // this.form.get('foto').setValue(file);
}
tallapru: tallaCreacionDTO={cantidad:3,nombre:"gercel"};
guardarCambios(){
 
  
  this.form.get('tallas').setValue(this.tallapru);
  
  this.submit.emit(this.form.value);
  
}
onSubmit(){

this.guardarCambios();

}










obtenerErrorCampoNombre(){
  var campo = this.form.get('nombre');
  if (campo.hasError('required')){
    return 'El campo nombre es requerido'; 
  }

  if (campo.hasError('minlength')){
    return 'La longitud mínima es de 3 caracteres'
  }

  if (campo.hasError('primeraLetraMayuscula')){
    return campo.getError('primeraLetraMayuscula').mensaje;
  }


  var campopre = this.form.get('precio');
  if (campopre.hasError('required')){
    return 'El campo nombre es requerido'; 
  }

  if (campopre.hasError('minlength')){
    return 'La longitud mínima es de 3 caracteres'
  }

  if (campopre.hasError('primeraLetraMayuscula')){
    return campopre.getError('primeraLetraMayuscula').mensaje;
  }

  return '';
}
}
