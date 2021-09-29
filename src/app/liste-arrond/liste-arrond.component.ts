import { Component, Input, OnInit } from '@angular/core';
import { MonServiceService } from '../mon-service.service';

@Component({
  selector: 'app-liste-arrond',
  templateUrl: './liste-arrond.component.html',
  styleUrls: ['./liste-arrond.component.css']
})

export class ListeArrondComponent implements OnInit {
 
localite:any[]=[];
index:number=0;
arrondi:any[]=[];
indice:number=0;
item=""

  constructor( public service:MonServiceService) { }

  ngOnInit(): void {
    this.localite=this.service.localite;
    this.index=this.service.index;
    this.arrondi=this.service.arrondi;
    this.indice=this.service.indice;

   
  }

  envoyerIdArrond(id:number):void{
    this.service.indice=id;
  }

}
