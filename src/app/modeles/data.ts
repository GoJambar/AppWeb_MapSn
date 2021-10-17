import { Arrondissement } from "./arrondissement";
import { Commune } from "./commune";
import { Departement } from "./departement";
import { Region } from "./region";


export class Data {

    departements: Departement[]=[];
    arrondissements: Arrondissement[]=[];
    regions:Region[]=[];
    communs:Commune[]=[];
}
