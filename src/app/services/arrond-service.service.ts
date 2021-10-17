import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arrondissement } from '../modeles/arrondissement';
import { LocaliteDep } from '../modeles/localite-dep';

@Injectable({
  providedIn: 'root'
})
export class ArrondServiceService {

  constructor(private http: HttpClient) { }

  liste="";
  detail="";

  getArrondissement():Observable<LocaliteDep>{
    
    return this.http.get<LocaliteDep>('/v1/'+ this.liste + '/arron');
  }

  getArrondissementById():Observable<Arrondissement>{
    
    return this.http.get<Arrondissement>('/v1/'+ this.detail);
  }
}
