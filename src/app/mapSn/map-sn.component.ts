
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Region } from '../modeles/region';
import { DepartementService } from '../services/departement.service';
import { RegionServicesService } from '../services/region-services.service';


@Component({
  selector: 'app-map-sn',
  templateUrl: './map-sn.component.html',
  styleUrls: ['./map-sn.component.css']
})
export class MapSNComponent implements OnInit {

  localite: Region[] = [];
  region: Region = new Region;
  name: string = "";

  constructor(private serviceDep: DepartementService, private serviceRegion: RegionServicesService,
  ) { }

  ngOnInit(): void {
    this.serviceRegion.getRegion().subscribe(data => this.localite = data._embedded.regions);

  }

  EnvoyerIdReg(link: string, name: string) {
    this.serviceRegion.lien = link;
    this.serviceDep.lien = link;
    this.serviceDep.nameRegion = name;
  }

  search() {
    if (this.name != "") {
      this.localite = this.localite.filter(data => {
        return data.name.toLocaleUpperCase().match(this.name.toLocaleUpperCase());
      });

    }
    else if (this.name == "") {
      this.ngOnInit();
    }



  }

}
