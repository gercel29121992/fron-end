import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { productoCreacionDTO, productoDTO, productotallaDTO } from './productos';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'productos';

  public obtenerPaginado(pagina: number, cantidadRegistrosAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<productoDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public obtenerTodoscontalla(){
    return this.http.get<productotallaDTO[]>(`${this.apiURL}/todosprotalla`);
  }
  public obtenerTodos(){
    return this.http.get<productoDTO[]>(`${this.apiURL}/todos`);
  }


  public obtenerPorId(id: number): Observable<productoDTO>{
    return this.http.get<productoDTO>(`${this.apiURL}/${id}`);
  }

  public crear(producto: productoCreacionDTO) {
    return this.http.post(this.apiURL, producto,this.headers);
  }

  public editar(id: number, producto: productoCreacionDTO){
    return this.http.put(`${this.apiURL}/${id}`, producto);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
