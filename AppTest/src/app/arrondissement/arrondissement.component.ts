import { Component, OnInit } from '@angular/core';
import { MonServiceService } from '../mon-service.service';

@Component({
  selector: 'app-arrondissement',
  templateUrl: './arrondissement.component.html',
  styleUrls: ['./arrondissement.component.css']
})
export class ArrondissementComponent implements OnInit {

  index :number=0;
  constructor(public sevice:MonServiceService) { }

  ngOnInit(): void {
    this.index=this.sevice.index;
   
  }
  envoyerId(){
  this.index=this.sevice.index;
  }

}
