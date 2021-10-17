import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commune } from '../modeles/commune';
import { LocaliteDep } from '../modeles/localite-dep';

@Injectable({
  providedIn: 'root'
})
export class CommuneServiceService {

  constructor(private http:HttpClient) { }
  lien="";
  nameRegion="";

  getCommune():Observable<LocaliteDep>{
    return  this.http.get<LocaliteDep>('/v1/' + this.lien + '/commun');
  }

  getCommuneById():Observable<Commune>{
    return this.http.get<Commune>('/v1/' + this.lien);
  }
}
