import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { medico } from 'src/app/models/medico';

@Injectable({
  providedIn: 'root'
})
export class ProjetoMedicoService {

  constructor(private http: HttpClient ) { }
  BASEURL = "http://localhost:1234/";

  cadastrar(med: medico): Observable<medico>{
   return this.http.post<medico>(this.BASEURL+"medico/cadastrar",med);
   
  }
  Listar(): Observable<medico[]>{
    return this.http.get<medico[]>(this.BASEURL+"medico/listar");
  }
}
