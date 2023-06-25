import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { tallaCreacionDTO } from '../talla';

@Component({
  selector: 'app-formulario-talla',
  templateUrl: './formulario-talla.component.html',
  styleUrls: ['./formulario-talla.component.css']
})
export class FormularioTallaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form: FormGroup;
  @Input()
  modelo: tallaCreacionDTO;

  @Output()
  submit: EventEmitter<tallaCreacionDTO> = new EventEmitter<tallaCreacionDTO>();
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, primeraLetraMayuscula()]
      }]
    });

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }
  guardarCambios(){
    this.submit.emit(this.form.value);
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if (campo.hasError('required')){
      return 'El campo nombre es requerido'; 
    }

    

    if (campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }

}
