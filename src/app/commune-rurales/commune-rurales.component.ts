import { Component, OnInit } from '@angular/core';
import { MonServiceService } from '../mon-service.service';

@Component({
  selector: 'app-commune-rurales',
  templateUrl: './commune-rurales.component.html',
  styleUrls: ['./commune-rurales.component.css']
})
export class CommuneRuralesComponent implements OnInit {

  constructor(private service: MonServiceService) { }
  indexRegion: number=0;
  localiteRegion : any[]=[];

  ngOnInit(): void {
    this.indexRegion=this.service.index;
    this.localiteRegion=this.service.localite;
  }

  envoyerId(){
    this.indexRegion=this.service.index;
  }

}
