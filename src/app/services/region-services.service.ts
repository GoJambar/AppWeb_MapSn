import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocaliteDep } from '../modeles/localite-dep';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionServicesService {

  constructor(private http: HttpClient) { }

  api="http://localhost:8080/regions";
  
  getRegion():Observable<LocaliteDep[]>{
    
    return this.http.get<LocaliteDep[]>('/v1/'+this.api);
  }
}
