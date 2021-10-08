import { Component, OnInit } from '@angular/core';
import { Departement } from '../modeles/departement';
import { LocaliteDep } from '../modeles/localite-dep';
import { MonServiceService } from '../mon-service.service';
import { ArrondServiceService } from '../services/arrond-service.service';
import { DepartementService } from '../services/departement.service';

@Component({
  selector: 'app-liste-depart',
  templateUrl: './liste-depart.component.html',
  styleUrls: ['./liste-depart.component.css']
})
export class ListeDepartComponent implements OnInit {

  constructor(private service : DepartementService,private monService:MonServiceService,private serviceArrond: ArrondServiceService) { }
  localite: Departement[]=[];
  localiteRegion:any[]=[];
  index:number=0;
  idDepart: number=0;

  ngOnInit(): void {
    this.localiteRegion=this.monService.localite;
    this.index=this.monService.index;
    this.service.getDepartement().subscribe(data => this.localite=data._embedded.departements);
        
  }

  EnvoyerIdDep(code: string){
    this.service.lien=code;
    this.serviceArrond.liste=code;

  }

}
