import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DepartementComponent } from './departement/departement.component';
import { ArrondissementComponent } from './arrondissement/arrondissement.component';
import { CommuneComponent } from './commune/commune.component';
import { CommuneArrondComponent } from './commune-arrond/commune-arrond.component';
import { CommuneRuralesComponent } from './commune-rurales/commune-rurales.component';
import { MapSNComponent } from './map-sn/map-sn.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    DepartementComponent,
    ArrondissementComponent,
    CommuneComponent,
    CommuneArrondComponent,
    CommuneRuralesComponent,
    MapSNComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
