import { Component, OnInit } from '@angular/core';
import { Departement } from '../modeles/departement';
import { LocaliteDep } from '../modeles/localite-dep';
import { MonServiceService } from '../mon-service.service';
import { ComRuralesServiceService } from '../services/com-rurales-service.service';

@Component({
  selector: 'app-liste-com-rurales',
  templateUrl: './liste-com-rurales.component.html',
  styleUrls: ['./liste-com-rurales.component.css']
})
export class ListeComRuralesComponent implements OnInit {

  constructor(private ServiceIndex: MonServiceService,private service:ComRuralesServiceService) { }
  indexRegion:number=0;
  localiteRegion: any[]=[];
  localiteComRurales:Departement[]=[];

  ngOnInit(): void {
    this.indexRegion=this.ServiceIndex.index;
    this.localiteRegion=this.ServiceIndex.localite;
    this.service.getComRurales().subscribe(data=>this.localiteComRurales=data);
    
  }

}
