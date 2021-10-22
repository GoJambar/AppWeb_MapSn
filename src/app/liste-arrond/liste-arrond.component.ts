import { Component, Input, OnInit } from '@angular/core';
import { Arrondissement } from '../modeles/arrondissement';
import { Departement } from '../modeles/departement';
import { Region } from '../modeles/region';
import { ArrondServiceService } from '../services/arrond-service.service';
import { CommuneServiceService } from '../services/commune-service.service';
import { DepartementService } from '../services/departement.service';
import { RegionServicesService } from '../services/region-services.service';

@Component({
  selector: 'app-liste-arrond',
  templateUrl: './liste-arrond.component.html',
  styleUrls: ['./liste-arrond.component.css']
})

export class ListeArrondComponent implements OnInit {
 
arrond:Arrondissement[]=[];
nomRegion="";
region:Region=new Region;
departement:Departement=new Departement;

  constructor(private arrondService: ArrondServiceService,private serviceDep:DepartementService,
    private serviceCom: CommuneServiceService) { }

  ngOnInit(): void {
      this.arrondService.getArrondissement().subscribe(data => this.arrond=data._embedded.arrondissements);
      this.serviceDep.getDepartementById().subscribe(data=>this.departement=data);
   
   
  }


  EnvoyerIdAr(code: string){
    this.arrondService.detail=code;
    this.serviceCom.lien=code;
  }

}
