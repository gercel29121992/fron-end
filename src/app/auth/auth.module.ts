import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { FormularioAutenticacionComponent } from './pages/herramientas/formulario-autenticacion/formulario-autenticacion.component';

import { ModificarPasswordComponent } from './pages/herramientas/modificar-password/modificar-password.component';
import { MostrarErroresComponent } from '../utilidades/mostrar-errores/mostrar-errores.component';
import { ModificarLoginAppComponent } from './pages/herramientas/modificar-login-app/modificar-login-app.component';
import { AppModule } from '../app.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ActivarUserAppComponent } from './pages/herramientas/useradmin/activar-user-app/activar-user-app.component';
import { ListUserAppComponent } from './pages/herramientas/useradmin/list-user-app/list-user-app.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    FormularioAutenticacionComponent,
    ModificarLoginAppComponent,
    ModificarPasswordComponent,ActivarUserAppComponent,ListUserAppComponent
    
  ],
  imports: [
    
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MaterialModule
   

    
  ]
})
export class AuthModule { }
