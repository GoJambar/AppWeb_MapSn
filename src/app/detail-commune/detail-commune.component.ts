import { Component, OnInit, ViewChild } from '@angular/core';
import { Commune } from '../modeles/commune';
import { CommuneServiceService } from '../services/commune-service.service';
import { DepartementService } from '../services/departement.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-detail-commune',
  templateUrl: './detail-commune.component.html',
  styleUrls: ['./detail-commune.component.css']
})
export class DetailCommuneComponent implements OnInit {
  @ViewChild('details') htmlData: any;


  constructor(private serviceCom: CommuneServiceService, private serviceDep: DepartementService) { }
  localite: Commune = new Commune;
  nameRegion = "";

  ngOnInit(): void {
    this.serviceCom.getCommuneById().subscribe(data => this.localite = data);
    this.nameRegion = this.serviceDep.nameRegion;
  }

  download(): void {
    let data: any;
    data = document.getElementById('details');

    html2canvas(data).then(canvas => {

      let fileWidth = 208;


      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');

      PDF.addImage("../assets/logo.PNG", 'PNG', 0, 0, 70, 30);

      let titre = "DETAILS DE LA COMMUNE DE " + this.localite.name.toUpperCase();
      PDF.text(titre, 50, 50);
      let habitant = "Habitant : " + this.localite.population + " hbts";
      PDF.text(habitant, 10, 70);
      let superficie = " Superficie : " + this.localite.superficie + "m²";
      PDF.text(superficie, 10, 90);
      let longitude = "Longitude : " + this.localite.longitute + " degrès";
      PDF.text(longitude, 10, 110);
      let latitude = "Latitude : " + this.localite.latitude + " degrès";
      PDF.text(latitude, 10, 130);
      let url = "lien :" + document.URL;
      PDF.text(url, 40, 170);

      PDF.save('details arrond.pdf');
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
