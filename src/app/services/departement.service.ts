import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocaliteDep } from '../modeles/localite-dep';
import { Departement } from '../modeles/departement';

import { RegionServicesService } from './region-services.service';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http: HttpClient,private serviceRegion : RegionServicesService) { 

  } 
  lien="";
  nameRegion="";
  api="http://localhost:8080/departements/";
  
  getDepartement():Observable<LocaliteDep>{
   
      return this.http.get<LocaliteDep>('/v1/'+ this.lien + '/depart' );
  
  }

  getDepartementById():Observable<Departement>{
    
    return this.http.get<Departement>('/v1/'+ this.lien);

  
  }
}


