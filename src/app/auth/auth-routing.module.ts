import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ModificarLoginAppComponent } from './pages/herramientas/modificar-login-app/modificar-login-app.component';
import { ModificarPasswordComponent } from './pages/herramientas/modificar-password/modificar-password.component';
import { ActivarUserAppComponent } from './pages/herramientas/useradmin/activar-user-app/activar-user-app.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {
      path:'',
     redirectTo:'login',
     pathMatch:'full'
    },
      {
        path:'login',
        component:LoginPageComponent
      },{
        path:'register',
        component:RegisterPageComponent
      },{
        path:'modificar/login/activate',
        component:ActivarUserAppComponent
      },
      {
        path:'modificar/login',
        component:ModificarLoginAppComponent
      },{
        path:'modificar/login/pass',
        component:ModificarPasswordComponent
      },
      

     
      {
        path:'**',
       redirectTo:'login'
      },
      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
