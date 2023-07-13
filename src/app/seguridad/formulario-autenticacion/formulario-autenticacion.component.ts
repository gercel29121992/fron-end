import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { credencialesUsuario } from '../seguridad';
import { SeguridadService } from '../seguridad.service';
@Component({
  selector: 'app-formulario-autenticacion',
  templateUrl: './formulario-autenticacion.component.html',
  styleUrls: ['./formulario-autenticacion.component.css'],
})
export class FormularioAutenticacionComponent implements OnInit {
 
  constructor(private formBuilder: FormBuilder,private seguridadService: SeguridadService) {}
  form: FormGroup;

  @Input()
  errores: string[] = [];
  @Input()
  accion: string;
  @Output()
  onSubmit: EventEmitter<credencialesUsuario> = new EventEmitter<credencialesUsuario>();
  validador: any
  valor=''
  ngOnInit(): void {
  
  
      if(this.accion=="Registro")
      {this.validador={validators: [Validators.required]}}
      else{
        this.validador={}
      }
    this.form = this.formBuilder.group({
      email: [ '', {validators: [Validators.required, Validators.email]        },      ],
      id: [ '',      ],
      password: [        '',                 this.validador              ], 
      password2: [        '',        this.validador      ],      
      nombre: [        '',        this.validador      ],
      apellido: [        '',        this.validador      ],
      sexo: [        '',        this.validador      ],
      ayudapass: [        'dfssd',        this.validador      ],
   
    
    });


     
    if(this.accion=='Editar'){
      this.seguridadService.obtenerUsuario(this.seguridadService.obtenerCampoJWT('email')).subscribe(respuesta => {
        console.log(respuesta)
        this.form.setValue({id:respuesta.body.id,email:respuesta.body.email,password:"",password2:"dd",nombre:respuesta.body.nombre,apellido:respuesta.body.apellido,sexo:respuesta.body.sexo,ayudapass:'sdf'});
      
   
      })
     }
    
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
