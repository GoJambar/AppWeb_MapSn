import { Component } from '@angular/core';
import { MonServiceService } from './mon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:"<h1 class='text-center'>Titre:{{title}}</h1>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MapSN';
    
    constructor() { }
  
    ngOnInit(): void {
      
    }
    
}
