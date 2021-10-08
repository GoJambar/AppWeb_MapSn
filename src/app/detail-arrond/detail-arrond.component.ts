import { Component, OnInit } from '@angular/core';
import { Arrondissement } from '../modeles/arrondissement';
import { MonServiceService } from '../mon-service.service';
import { ArrondServiceService } from '../services/arrond-service.service';

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


constructor(public service: MonServiceService,private arrondService:ArrondServiceService) { }

  ngOnInit(): void {
    this.index=this.service.index;
    this.arrondi=this.service.arrondi;
    this.indice=this.service.indice;
    this.localite=this.service.localite;
    this.arrondService.getIdArrondissement().subscribe(data=>this.localArrond=data);
    
  }

}
