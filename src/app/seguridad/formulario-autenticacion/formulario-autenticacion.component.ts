import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { credencialesUsuario } from '../seguridad';
@Component({
  selector: 'app-formulario-autenticacion',
  templateUrl: './formulario-autenticacion.component.html',
  styleUrls: ['./formulario-autenticacion.component.css'],
})
export class FormularioAutenticacionComponent implements OnInit {
 
  constructor(private formBuilder: FormBuilder) {}
  form: FormGroup;

  @Input()
  errores: string[] = [];
  @Input()
  accion: string;
  @Output()
  onSubmit: EventEmitter<credencialesUsuario> = new EventEmitter<credencialesUsuario>();
  validador: any
  ngOnInit(): void {
    if(this.accion=="Registro"|| this.accion=="Editar")
      {this.validador={validators: [Validators.required]}}
      else{
        this.validador={}
      }
    this.form = this.formBuilder.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      password: [
        '',
        {
          validators: [Validators.required]
        }
      ],      password2: [
        '',
        this.validador
      ],
      nombre: [
        '',
        this.validador
      ],
      apellido: [
        '',
        this.validador
      ],
      sexo: [
        '',
        this.validador
      ],
      ayudapass: [
        'dfssd',
        this.validador
      ],
   
    
    });
  }
  obtenerMensajeErrorpass()
  {
    var password = this.form.get('password');
    var password2 = this.form.get('password2');
    

  if(password.value!==password2.value)
  {
    return 'Los campos Password son disintos';
  }

return '';
  }
 
 
 obtenerMensajeErrorEmail(){
    var campo = this.form.get('email');
   
    if (campo.hasError('required')){
      return 'El campo Email es requerido';
    }

    if (campo.hasError('email')){
      return 'El email no es válido';
    }

    return '';
  }
}
