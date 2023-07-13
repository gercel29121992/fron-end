import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {MarkdownModule} from 'ngx-markdown'
import {LeafletModule} from '@asymmetrik/ngx-leaflet'
// import "leaflet/dist/images/marker-shadow.png";

import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { FormularioGeneroComponent } from './generos/formulario-genero/formulario-genero.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { FormularioActoresComponent } from './actores/formulario-actores/formulario-actores.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component';
import { FormularioCineComponent } from './cines/formulario-cine/formulario-cine.component';
import { MapaComponent } from './utilidades/mapa/mapa.component';
import { FormularioPeliculaComponent } from './peliculas/formulario-pelicula/formulario-pelicula.component';
import { SelectorMultipleComponent } from './utilidades/selector-multiple/selector-multiple.component';
import { AutocompleteActoresComponent } from './actores/autocomplete-actores/autocomplete-actores.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { CrearProductosComponent } from './productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './productos/editar-productos/editar-productos.component';
import { IndiceProductosComponent } from './productos/indice-productos/indice-productos.component';
import { FormularioProductosComponent } from './productos/formulario-productos/formulario-productos.component';
import { HeadComponent } from './utilidades/head/head.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormularioAutenticacionComponent } from './seguridad/formulario-autenticacion/formulario-autenticacion.component';
import { LoginComponent } from './seguridad/login/login.component';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { MatMenuModule } from '@angular/material/menu';
import { AutorizadoComponent } from './seguridad/autorizado/autorizado.component';
import { ProviderAst } from '@angular/compiler';
import { SeguridadInterceptorService } from './seguridad/seguridad-interceptor.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CrearTallaComponent } from './talla/crear-talla/crear-talla.component';
import { EditarTallaComponent } from './talla/editar-talla/editar-talla.component';
import { FormularioTallaComponent } from './talla/formulario-talla/formulario-talla.component';
import { ListTallaComponent } from './talla/list-talla/list-talla.component';
import { MatInput, MatInputModule } from '@angular/material/input';
import { ModificarLoginAppComponent } from './seguridad/modificar-login-app/modificar-login-app.component';
import { ActivarUserAppComponent } from './seguridad/useradmin/activar-user-app/activar-user-app.component';
import { ListUserAppComponent } from './seguridad/useradmin/herramientas/list-user-app/list-user-app.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProgressBarComponent } from './utilidades/progresbar/progress-bar/progress-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MostrarErroresComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndiceGenerosComponent,
    CrearGeneroComponent,
    IndiceActoresComponent,
    CrearActorComponent,
    CrearPeliculaComponent,
    CrearCineComponent,
    IndiceCinesComponent,
    EditarActorComponent,
    EditarGeneroComponent,
    EditarCineComponent,
    EditarPeliculaComponent,
    FormularioGeneroComponent,
    FiltroPeliculasComponent,
    FormularioActoresComponent,
    InputImgComponent,
    InputMarkdownComponent,
    FormularioCineComponent,
    MapaComponent,
    FormularioPeliculaComponent,
    SelectorMultipleComponent,
    AutocompleteActoresComponent,
    CrearProductosComponent,
    EditarProductosComponent,
    IndiceProductosComponent,
    FormularioProductosComponent,
    HeadComponent, 
    FormularioAutenticacionComponent,
    RegistroComponent,
    AutorizadoComponent,
  
    CrearTallaComponent,
    EditarTallaComponent,
    FormularioTallaComponent,
    ListTallaComponent,
    ModificarLoginAppComponent,
    ActivarUserAppComponent,
    ListUserAppComponent,
   
  
  
    
    
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LeafletModule, 
    HttpClientModule,
    MatSidenavModule, 
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatProgressBarModule,
   
    
   
    MarkdownModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SeguridadInterceptorService,
    multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
