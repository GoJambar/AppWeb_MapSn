import { Component, OnInit } from '@angular/core';
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

  constructor( public service:MonServiceService) { }

  ngOnInit(): void {
    this.localite=this.service.localite;
    this.index=this.service.index;
    this.arrondi=this.service.arrondi;
   
  }

}
