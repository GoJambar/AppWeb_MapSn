import { Component, OnInit, ViewChild } from '@angular/core';
import { Departement } from '../modeles/departement';
import { Region } from '../modeles/region';
import { DepartementService } from '../services/departement.service';
import { RegionServicesService } from '../services/region-services.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-detail-depart',
  templateUrl: './detail-depart.component.html',
  styleUrls: ['./detail-depart.component.css']
})
export class DetailDepartComponent implements OnInit {
  @ViewChild('details') htmlData: any;

  constructor(private serviceDep: DepartementService,
    private serviceRegion: RegionServicesService) { }
  localiteDep: Departement = new Departement;
  region: Region = new Region;


  ngOnInit(): void {
    this.serviceDep.getDepartementById().subscribe(data => this.localiteDep = data);
    this.serviceRegion.getRegionById().subscribe(data => this.region = data);

  }

  download(): void {
    let data: any;
    data = document.getElementById('details');

    html2canvas(data).then(canvas => {

      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      PDF.addImage("../assets/logo.PNG", 'PNG', 0, 0, 70, 30);

      let titre = "DETAILS DU DEPARTEMENT DE " + this.localiteDep.name.toUpperCase();
      PDF.text(titre, 50, 50);
      let habitant = "Habitant : " + this.localiteDep.population + " hbts";
      PDF.text(habitant, 10, 70);
      let superficie = " Superficie : " + this.localiteDep.superficie + "m²";
      PDF.text(superficie, 10, 90);
      let longitude = "Longitude : " + this.localiteDep.longitute + " degrès";
      PDF.text(longitude, 10, 110);
      let latitude = "Latitude : " + this.localiteDep.latitude + " degrès";
      PDF.text(latitude, 10, 130);
      let url = "lien :" + document.URL;
      PDF.text(url, 40, 170);

      PDF.save('details departement.pdf');
    });
  }

  share_twitter() {

    var link = "https://twitter.com/intent/tweet?text= " +
      '&via= MapSn' + "&url=" + encodeURIComponent(document.URL);
    window.open(link, 'Partage', 'scrollbars=yes, width=640, height=350, top=0, left=0');

  }

  share_facebook() {
    var link = "https://facebook.com/sharer/sharer.php=?u " +
      '&via= MapSn' + "&url=" + encodeURIComponent(document.URL);
    window.open(link, 'Partage', 'scrollbars=yes, width=640, height=350, top=0, left=0');

  }
}
