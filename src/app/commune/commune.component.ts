import { Component, Input, OnInit } from '@angular/core';
import { Region } from '../modeles/region';
import { DepartementService } from '../services/departement.service';
import { RegionServicesService } from '../services/region-services.service';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit {
region: Region=new Region;
link="";

  constructor(private serviceRegion: RegionServicesService,
    private serviceDep:DepartementService) { }

  ngOnInit(): void {
      this.serviceRegion.getRegionById().subscribe(data=>this.region=data);  
    
  }
 
}
