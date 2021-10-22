import { Component, OnInit } from '@angular/core';
import { iif } from 'rxjs';
import { Departement } from '../modeles/departement';
import { Localite } from '../modeles/localite';
import { LocaliteDep } from '../modeles/localite-dep';
import { Region } from '../modeles/region';
import { MonServiceService } from '../mon-service.service';
import { DepartementService } from '../services/departement.service';
import { RegionServicesService } from '../services/region-services.service';

@Component({
  selector: 'app-detail-depart',
  templateUrl: './detail-depart.component.html',
  styleUrls: ['./detail-depart.component.css']
})
export class DetailDepartComponent implements OnInit {

  constructor(private serviceDep: DepartementService,
    private serviceRegion:RegionServicesService) { }
  localiteDep:Departement=new Departement;
  region:Region=new Region;


  ngOnInit(): void {
      this.serviceDep.getDepartementById().subscribe(data => this.localiteDep=data);
      this.serviceRegion.getRegionById().subscribe(data => this.region=data);

  }

}
