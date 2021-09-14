import { Component, Input, OnInit } from '@angular/core';
import { MonServiceService } from '../mon-service.service';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit {

localite: any[] = [];
index:number=0;


  constructor(public service: MonServiceService) { }

  ngOnInit(): void {
    this.localite=this.service.localite;
    this.index=this.service.index;

    
  }

}
