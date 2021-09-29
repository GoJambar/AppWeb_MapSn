import { Component, OnInit } from '@angular/core';
import { MonServiceService } from '../mon-service.service';

@Component({
  selector: 'app-detail-arrond',
  templateUrl: './detail-arrond.component.html',
  styleUrls: ['./detail-arrond.component.css']
})
export class DetailArrondComponent implements OnInit {

  index:number=0;
arrondi:any[]=[];
indice:number=0;


  constructor(public service: MonServiceService) { }

  ngOnInit(): void {
    this.index=this.service.index;
    this.arrondi=this.service.arrondi;
    this.indice=this.service.indice;
    
  }

}
