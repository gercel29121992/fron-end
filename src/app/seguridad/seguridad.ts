export interface credencialesUsuario{
    email: string;
    password: string;
    password2: string;
    nombre: string;
    ayudapass: string;
    apellido: string;
    sexo: string;
   
  

  
}
export interface credencialesUsuarioedit{
    id:number;
    email: string;
    nombre: string;
    ayudapass: string;
    apellido: string;
    sexo: string;
   
  

  
}

export interface respuestaAutenticacion {
    token: string;
    expiracion: Date;
}

export interface usuarioDTO{
    id: string;
    email: string;
}
export interface paginacion{
 
  
    paginas:number;
    record:number;
    
  }