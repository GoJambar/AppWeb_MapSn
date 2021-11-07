import { Component, OnInit, ViewChild } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Region } from '../modeles/region';
import { RegionServicesService } from '../services/region-services.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit {
  @ViewChild('details') htmlData: any;
  region: Region = new Region;
  text: any;

  constructor(private serviceRegion: RegionServicesService) { }
  url = this.serviceRegion.lien;
  chaine: any;

  ngOnInit(): void {
    this.serviceRegion.getRegionById().subscribe((data) => {
      this.region = data;

    });
  }

  download() {
    let data: any;
    data = document.getElementById('details');

    html2canvas(data).then(canvas => {

      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 30;
      PDF.addImage("../assets/logo.PNG", 'PNG', 0, 0, 70, 30);

      let titre = "DETAILS DE LA REGION DE " + this.region.name.toUpperCase();
      PDF.text(titre, 50, 50);
      let habitant = "Habitant : " + this.region.population + " hbts";
      PDF.text(habitant, 10, 70);
      let superficie = " Superficie : " + this.region.superficie + "m²";
      PDF.text(superficie, 10, 90);
      let longitude = "Longitude : " + this.region.longitute + " degrès";
      PDF.text(longitude, 10, 110);
      let latitude = "Latitude : " + this.region.latitude + " degrès";
      PDF.text(latitude, 10, 130);
      let url = "lien :" + document.URL;
      PDF.text(url, 40, 170);

      PDF.save('details region.pdf');
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

