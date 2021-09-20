import { Component, OnInit } from '@angular/core';
import { MonServiceService } from '../mon-service.service';


@Component({
  selector: 'app-map-sn',
  templateUrl: './map-sn.component.html',
  styleUrls: ['./map-sn.component.css']
})
export class MapSNComponent implements OnInit {

  localite: any[] = [];

  
  constructor(public service: MonServiceService ) { }

  ngOnInit(): void {
    this.localite=this.service.localite;
  
  }


  onEnvoyer(index: number):void{
    console.log("hello");
    this.service.index=index;

  }

}
