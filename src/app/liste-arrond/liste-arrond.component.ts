import { Component, Input, OnInit } from '@angular/core';
import { Arrondissement } from '../modeles/arrondissement';
import { Departement } from '../modeles/departement';
import { MonServiceService } from '../mon-service.service';
import { ArrondServiceService } from '../services/arrond-service.service';

@Component({
  selector: 'app-liste-arrond',
  templateUrl: './liste-arrond.component.html',
  styleUrls: ['./liste-arrond.component.css']
})

export class ListeArrondComponent implements OnInit {
 
localite:any[]=[];
arrond:Arrondissement[]=[];
index:number=0;
arrondi:any[]=[];
indice:number=0;
item=""

  constructor( public service:MonServiceService,private arrondService: ArrondServiceService) { }

  ngOnInit(): void {
    this.localite=this.service.localite;
    this.index=this.service.index;
    this.arrondi=this.service.arrondi;
    this.indice=this.service.indice;
    this.arrondService.getArrondissement().subscribe(data => this.arrond=data._embedded.arrondissements);


   
  }

  envoyerIdArrond(id:number):void{
    this.service.indice=id;
  }

  EnvoyerIdAr(code: string){
    this.arrondService.detail=code;
  }

}
