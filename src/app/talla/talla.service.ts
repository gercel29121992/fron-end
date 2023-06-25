import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tallaCreacionDTO, tallaDTO } from './talla';

@Injectable({
  providedIn: 'root'
})
export class TallaService {

  constructor(private http: HttpClient) { }
  private headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  private apiURL = environment.apiURL + 'talla'; 


  
  public crear(talla: tallaCreacionDTO) {
    return this.http.post(this.apiURL, talla,this.headers);
  }


  public obtenerTodos(){
    return this.http.get<tallaDTO[]>(`${this.apiURL}/todos`);
  }


  public obtenerPorId(id: number): Observable<tallaDTO>{
    return this.http.get<tallaDTO>(`${this.apiURL}/${id}`);
  }


  public editar(id: number, talla: tallaDTO){
    return this.http.put(`${this.apiURL}/${id}`, talla);
  }


  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
