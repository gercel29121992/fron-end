import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { credencialesUsuario } from '../../../../seguridad/seguridad';
import { SeguridadService } from '../../../../seguridad/seguridad.service';

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
  validadoremail: any
  validadorpass: any
  validadorpassrepetir: any
  validadorpassrepetir3: any
  valor=''
  ngOnInit(): void {
  
  
      if(this.accion=="Registro")
      {this.validador={validators: [Validators.required]}
      this.validadoremail={validators: [Validators.required, Validators.email]}
      this.validadorpass={validators: [Validators.required]}
      this.validadorpassrepetir={validators: [Validators.required]}
      this.validadorpassrepetir3={}
    }

      if(this.accion=="Login")
      {
        this.validadoremail={validators: [Validators.required, Validators.email]}
        this.validadorpassrepetir={}
      this.validadorpassrepetir3={}


      }
      if(this.accion=="enviar")
      {
        this.validadorpass={validators: [Validators.required]}
        this.validadorpassrepetir={validators: [Validators.required]}
        this.validadorpassrepetir3={validators: [Validators.required]}
    }
    

      
        
     
    this.form = this.formBuilder.group({
      email: [ '', this.validadoremail,      ],
      id: [ '',      ],
      password: [        '',                 this.validadorpass ], 
      password2: [        '',        this.validadorpassrepetir      ],      
      password3: [        '',        this.validadorpassrepetir3      ],      
      nombre: [        '',        this.validador      ],
      apellido: [        '',        this.validador      ],
      sexo: [        '',        this.validador      ],
      ayudapass: [        'dfssd'            ],
   
    
    });


     
    if(this.accion=='Editar'){
      this.seguridadService.obtenerUsuario(this.seguridadService.obtenerCampoJWT('email')).subscribe(respuesta => {
        console.log(respuesta)
        this.form.setValue({id:respuesta.body.id,email:respuesta.body.email,password:"",password2:"",password3:"",nombre:respuesta.body.nombre,apellido:respuesta.body.apellido,sexo:respuesta.body.sexo,ayudapass:'sdf'});
      
   
      })
     }
     if(this.accion=='enviar'){
      this.seguridadService.obtenerUsuario(this.seguridadService.obtenerCampoJWT('email')).subscribe(respuesta => {
        console.log(respuesta)
        this.form.setValue({id:respuesta.body.id,email:respuesta.body.email,password:"",password2:"",password3:"",nombre:respuesta.body.nombre,apellido:respuesta.body.apellido,sexo:respuesta.body.sexo,ayudapass:'sdf'});
      console.log(this.form.value)
   
      })
     }
    
  }
  obtenerMensajeErrorpass()
  {
    const password = this.form.get('password')?.value;
    const password2 = this.form.get('password2')?.value;
    const password2touch = this.form.get('password2');

   
console.log(password)

  if(password !==password2)
  {
    if(password2touch.touched)
    {
      password2touch?.setErrors({noesigual:true})
console.log(password2touch)

      return 'Los campos Password son disintos';
    }
  }
  if(password2touch.hasError('noesigual'))
  {
    password2touch.setErrors(null)

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
