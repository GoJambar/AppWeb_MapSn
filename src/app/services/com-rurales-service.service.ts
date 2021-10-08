import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../modeles/departement';
import { LocaliteDep } from '../modeles/localite-dep';

@Injectable({
  providedIn: 'root'
})
export class ComRuralesServiceService {

  constructor(private http: HttpClient) { }
  
  api="http://localhost:8080/regions";

  getComRurales():Observable<Departement[]>{
    return this.http.get<Departement[]>('/v1/'+this.api);

  }

}
