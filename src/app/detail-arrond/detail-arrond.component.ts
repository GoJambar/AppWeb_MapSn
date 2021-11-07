import { Component, OnInit, ViewChild } from '@angular/core';
import { Arrondissement } from '../modeles/arrondissement';
import { ArrondServiceService } from '../services/arrond-service.service';
import { DepartementService } from '../services/departement.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-detail-arrond',
  templateUrl: './detail-arrond.component.html',
  styleUrls: ['./detail-arrond.component.css']
})
export class DetailArrondComponent implements OnInit {
  @ViewChild('details') htmlData: any;

  localArrond: Arrondissement = new Arrondissement;


  constructor(private arrondService: ArrondServiceService, private serviceDep: DepartementService) { }

  nameRegion = "";
  ngOnInit(): void {

    this.arrondService.getArrondissementById().subscribe(data => this.localArrond = data);
    this.nameRegion = this.serviceDep.nameRegion;

  }

  download(): void {
    let data: any;
    data = document.getElementById('details');

    html2canvas(data).then(canvas => {

      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 30;
      PDF.addImage("../assets/logo.PNG", 'PNG', 0, 0, 70, 30);

      let titre = "DETAILS De L'ARRONDISSEMENT DE " + this.localArrond.name.toUpperCase();
      PDF.text(titre, 50, 50);
      let habitant = "Habitant : " + this.localArrond.population + " hbts";
      PDF.text(habitant, 10, 70);
      let superficie = " Superficie : " + this.localArrond.superficie + "m²";
      PDF.text(superficie, 10, 90);
      let longitude = "Longitude : " + this.localArrond.longitute + " degrès";
      PDF.text(longitude, 10, 110);
      let latitude = "Latitude : " + this.localArrond.latitude + " degrès";
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
