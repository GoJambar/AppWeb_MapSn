import { Component, OnInit } from '@angular/core';
import { Commune } from '../modeles/commune';
import { CommuneServiceService } from '../services/commune-service.service';
import { DepartementService } from '../services/departement.service';

@Component({
  selector: 'app-liste-communes',
  templateUrl: './liste-communes.component.html',
  styleUrls: ['./liste-communes.component.css']
})
export class ListeCommunesComponent implements OnInit {

  constructor(private serviceCom: CommuneServiceService,private serviceDep:DepartementService) { }
  localite:Commune[]=[];
  nom="";

  ngOnInit(): void {
    this.serviceCom.getCommune().subscribe(data=> this.localite=data._embedded.communs);
    this.nom=this.serviceDep.nameRegion;
  }

  EnvoyerIdCom(link: string){
    this.serviceCom.lien=link;

  }

}
