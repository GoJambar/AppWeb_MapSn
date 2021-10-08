import { Component, OnInit } from '@angular/core';
import { Departement } from '../modeles/departement';
import { LocaliteDep } from '../modeles/localite-dep';
import { MonServiceService } from '../mon-service.service';
import { DepartementService } from '../services/departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

 localite : Departement[]=[];
 
  constructor(private service: DepartementService,private monService:MonServiceService) {
    
   
      //{
    //  console.log(data);
     // this.localite=data;
    //})
  }
  codeDep:number=0;
  

  ngOnInit(): void { 
    this.codeDep=this.monService.index;

  }
  listeDep(){
    this.service.getDepartement().subscribe(data => this.localite=data._embedded.departements);
  }


  
}
