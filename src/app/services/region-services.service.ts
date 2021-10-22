import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from '../modeles/region';
import { LocaliteDep } from '../modeles/localite-dep';



@Injectable({
  providedIn: 'root'
})
export class RegionServicesService {

  constructor(private http: HttpClient) { }

  api="http://localhost:8080/regions/";
  lien=""
  id="";

  getRegion():Observable<LocaliteDep>{
    return this.http.get<LocaliteDep>('/v1/'+ this.api);
  }
  
  getRegionById():Observable<Region>{
    
    return this.http.get<Region>('/v1/'+ this.lien);
  }
  
}
