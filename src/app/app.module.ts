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
import { DetailArrondComponent } from './detail-arrond/detail-arrond.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeDepartComponent } from './liste-depart/liste-depart.component';
import { ListeComRuralesComponent } from './liste-com-rurales/liste-com-rurales.component';
import { DetailDepartComponent } from './detail-depart/detail-depart.component';
import { ListeCommunesComponent } from './liste-communes/liste-communes.component';
import { DetailCommuneComponent } from './detail-commune/detail-commune.component';

const appRoutes: Routes=[
  
  { path:'region' , component: CommuneComponent},
  { path:'', component: MapSNComponent},
  { path: 'listeArrond', component: ListeArrondComponent}  ,
  {path: "arrondissement", component: DetailArrondComponent},
  {path: "listeDepartement", component: ListeDepartComponent},
  {path: "listeComRurales", component: ListeComRuralesComponent},
  {path:"departement",component: DetailDepartComponent},
  { path:"listeCommunes", component:ListeCommunesComponent},
  { path: "commune", component:DetailCommuneComponent}

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
    ListeArrondComponent,
    DetailArrondComponent,
    ListeDepartComponent,
    ListeComRuralesComponent,
    DetailDepartComponent,
    ListeCommunesComponent,
    DetailCommuneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [MonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

