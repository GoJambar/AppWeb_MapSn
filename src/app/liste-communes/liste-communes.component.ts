import { Component, OnInit } from '@angular/core';
import { Arrondissement } from '../modeles/arrondissement';
import { Commune } from '../modeles/commune';
import { ArrondServiceService } from '../services/arrond-service.service';
import { CommuneServiceService } from '../services/commune-service.service';
import { DepartementService } from '../services/departement.service';

@Component({
  selector: 'app-liste-communes',
  templateUrl: './liste-communes.component.html',
  styleUrls: ['./liste-communes.component.css']
})
export class ListeCommunesComponent implements OnInit {

  constructor(private serviceCom: CommuneServiceService,private serviceArrond:ArrondServiceService) { }
  localite:Commune[]=[];
  arrondissement:Arrondissement=new Arrondissement;

  ngOnInit(): void {
    this.serviceCom.getCommune().subscribe(data=> this.localite=data._embedded.communs);
    this.serviceArrond.getArrondissementById().subscribe(data=>this.arrondissement=data);
    
  }

  EnvoyerIdCom(link: string){
    this.serviceCom.lien=link;

  }

}
