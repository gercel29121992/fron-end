import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { CrearProductosComponent } from './productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './productos/editar-productos/editar-productos.component';
import { IndiceProductosComponent } from './productos/indice-productos/indice-productos.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { CrearTallaComponent } from './talla/crear-talla/crear-talla.component';
import { EditarTallaComponent } from './talla/editar-talla/editar-talla.component';
import { ListTallaComponent } from './talla/list-talla/list-talla.component';
import { ModificarLoginAppComponent } from './seguridad/modificar-login-app/modificar-login-app.component';
import { ActivarUserAppComponent } from './seguridad/useradmin/activar-user-app/activar-user-app.component';
import { ModificarPasswordComponent } from './seguridad/modificar-password/modificar-password.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'modificar/login', component: ModificarLoginAppComponent},
  {path: 'modificar/login/activate', component:  ActivarUserAppComponent},
  {path: 'productos', component: IndiceProductosComponent},
  {path: 'modificar/login/pass', component: ModificarPasswordComponent},
  
  {path: 'productos/Crear', component: CrearProductosComponent},
  {path: 'productos/editar/:id', component: EditarProductosComponent},
  {path: 'generos', component: IndiceGenerosComponent},
  {path: 'generos/crear', component: CrearGeneroComponent},
  {path: 'generos/editar/:id', component: EditarGeneroComponent},
  {path: 'talla', component: ListTallaComponent},
  {path: 'talla/Crear', component: CrearTallaComponent},
  {path: 'talla/editar/:id', component: EditarTallaComponent},
  {path: 'actores', component: IndiceActoresComponent},
  {path: 'actores/crear', component: CrearActorComponent},
  {path: 'actores/editar/:id', component: EditarActorComponent},
  {path: 'cines', component: IndiceCinesComponent},
  {path: 'cines/crear', component: CrearCineComponent},
  {path: 'cines/editar/:id', component: EditarCineComponent},
  {path: 'peliculas/crear', component: CrearPeliculaComponent},
  {path: 'peliculas/editar/:id', component: EditarPeliculaComponent},
  {path: 'peliculas/buscar', component: FiltroPeliculasComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
