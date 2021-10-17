import { Component, OnInit } from '@angular/core';
import { Commune } from '../modeles/commune';
import { CommuneServiceService } from '../services/commune-service.service';
import { DepartementService } from '../services/departement.service';

@Component({
  selector: 'app-detail-commune',
  templateUrl: './detail-commune.component.html',
  styleUrls: ['./detail-commune.component.css']
})
export class DetailCommuneComponent implements OnInit {
  

  constructor(private serviceCom: CommuneServiceService, private serviceDep : DepartementService) { }
  localite: Commune=new Commune;
  nameRegion="";

  ngOnInit(): void {
    this.serviceCom.getCommuneById().subscribe(data => this.localite=data);
    this.nameRegion=this.serviceDep.nameRegion;
  }

}
