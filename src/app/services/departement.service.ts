import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocaliteDep } from '../modeles/localite-dep';
import { Localite } from '../modeles/localite';
import { MonServiceService } from '../mon-service.service';
import { Departement } from '../modeles/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http: HttpClient) { 

  } 
  indexDepartement: number=1;
  lien="";
   api="http://localhost:8080/regions/";
  
  getDepartement():Observable<LocaliteDep>{
    
    return this.http.get<LocaliteDep>('/v1/'+ this.api + this.indexDepartement+ '/depart');
  }

  getIdDepartement():Observable<Departement>{
    
    return this.http.get<Departement>('/v1/'+ this.lien);
  }
}


