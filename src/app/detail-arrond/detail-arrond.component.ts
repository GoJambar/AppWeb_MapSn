import { Component, OnInit } from '@angular/core';
import { Arrondissement } from '../modeles/arrondissement';
import { MonServiceService } from '../mon-service.service';
import { ArrondServiceService } from '../services/arrond-service.service';
import { DepartementService } from '../services/departement.service';

@Component({
  selector: 'app-detail-arrond',
  templateUrl: './detail-arrond.component.html',
  styleUrls: ['./detail-arrond.component.css']
})
export class DetailArrondComponent implements OnInit {

index:number=0;
arrondi:any[]=[];
indice:number=0;
localite: any[]=[];
localArrond: Arrondissement=new Arrondissement;


constructor(private arrondService:ArrondServiceService,private serviceDep: DepartementService) { }

nameRegion="";
  ngOnInit(): void {

    this.arrondService.getArrondissementById().subscribe(data=>this.localArrond=data);
    this.nameRegion=this.serviceDep.nameRegion;
    
  }

}
