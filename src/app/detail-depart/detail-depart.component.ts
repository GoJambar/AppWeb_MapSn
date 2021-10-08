import { Component, OnInit } from '@angular/core';
import { Departement } from '../modeles/departement';
import { Localite } from '../modeles/localite';
import { LocaliteDep } from '../modeles/localite-dep';
import { MonServiceService } from '../mon-service.service';
import { DepartementService } from '../services/departement.service';

@Component({
  selector: 'app-detail-depart',
  templateUrl: './detail-depart.component.html',
  styleUrls: ['./detail-depart.component.css']
})
export class DetailDepartComponent implements OnInit {

  constructor(private serviceDep: DepartementService,private service:MonServiceService) { }
  localiteDep:Departement=new Departement;
  indexRegion:number=0;
  region:any[]=[];


  ngOnInit(): void {
    this.serviceDep.getIdDepartement().subscribe(data => this.localiteDep=data);
    this.indexRegion=this.service.index;
    this.region=this.service.localite;


  }

}
