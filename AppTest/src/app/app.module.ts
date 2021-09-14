import { Component, NgModule } from '@angular/core';
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
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MonServiceService } from './mon-service.service';
import { ListeArrondComponent } from './liste-arrond/liste-arrond.component';


const appRoutes: Routes=[
  
  { path:'dakar' , component: CommuneComponent},
  { path:'', component: MapSNComponent},
  { path: 'listeArrond', component: ListeArrondComponent}  

];
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    DepartementComponent,
    ArrondissementComponent,
    CommuneComponent,
    CommuneArrondComponent,
    CommuneRuralesComponent,
    MapSNComponent,
    ListeArrondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [MonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

