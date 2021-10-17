import { Component, OnInit } from '@angular/core';
import { Departement } from '../modeles/departement';
import { Region } from '../modeles/region';
import { ArrondServiceService } from '../services/arrond-service.service';
import { DepartementService } from '../services/departement.service';
import { RegionServicesService } from '../services/region-services.service';

@Component({
  selector: 'app-liste-depart',
  templateUrl: './liste-depart.component.html',
  styleUrls: ['./liste-depart.component.css']
})
export class ListeDepartComponent implements OnInit {

  constructor(private service: DepartementService,
    private serviceRegion:RegionServicesService,
     private serviceArrond: ArrondServiceService) { }
  localite: Departement[] = [];
  name = "";
  localiteDep:Departement=new Departement;
  region:Region=new Region;

  ngOnInit(): void {
    this.service.getDepartement().subscribe(data => this.localite = data._embedded.departements);

    this.serviceRegion.getRegionById().subscribe(data => this.region = data);
    
  }

  EnvoyerIdDep(code: string):void {
    this.service.lien = code;
    this.serviceArrond.liste = code;

  }
  search(){
    if(this.name !=""){
      this.localite=this.localite.filter(data=>{
        return data.name.toLocaleUpperCase().match(this.name.toLocaleUpperCase());
      })

    }
    else if (this.name== ""){
      this.ngOnInit();
    }

  }

}
