import { Component, OnInit } from '@angular/core';
import { MonServiceService } from '../mon-service.service';
import { DepartementService } from '../services/departement.service';


@Component({
  selector: 'app-map-sn',
  templateUrl: './map-sn.component.html',
  styleUrls: ['./map-sn.component.css']
})
export class MapSNComponent implements OnInit {

  localite: any[] = [];

  
  constructor(public service: MonServiceService, private serviceDep: DepartementService ) { }

  ngOnInit(): void {
    this.localite=this.service.localite;
  
  }


  onEnvoyer(index: number):void{
    this.service.index=index;
    this.serviceDep.indexDepartement=index + 1;
  }

}
