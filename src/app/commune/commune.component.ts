import { Component, OnInit, ViewChild } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Region } from '../modeles/region';
import { RegionServicesService } from '../services/region-services.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';




@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit {
  @ViewChild('details') htmlData:any;
region: Region=new Region;

  constructor(private serviceRegion: RegionServicesService) { }

  ngOnInit(): void {
      this.serviceRegion.getRegionById().subscribe((data)=>{
        this.region=data ;
        console.log(data);    
  });
 
}
download(){
  let data:any;
    data= document.getElementById('details');
    
html2canvas(data).then(canvas => {
    
    let fileWidth = 208;
    let fileHeight = canvas.height * fileWidth / canvas.width;
    
    const FILEURI = canvas.toDataURL('image/png')
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
    
    PDF.save('details.pdf');
});   
}
}
