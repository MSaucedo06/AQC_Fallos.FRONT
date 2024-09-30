import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Falla } from '../models/falla.model'; 

@Injectable({
  providedIn: 'root'
})
export class FallasService {

  private apiUrl = 'https://localhost:7081/api/Fallas'; 

  constructor(private http: HttpClient) { }

  getFallas(): Observable<Falla[]> {
    return this.http.get<Falla[]>(this.apiUrl);
  }

  getFallaById(id: number): Observable<Falla> {
    return this.http.get<Falla>(`${this.apiUrl}/${id}`);
  }

  createFalla(nuevaFalla: Falla): Observable<Falla> {
    return this.http.post<Falla>(this.apiUrl, nuevaFalla);
  }  
}