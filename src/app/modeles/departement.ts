import { Links } from "./links";

export class Departement {
    
        codeDep:    string="";
        name:       string="";
        superficie: number=0;
        population: number=0;
        latitude:   number=0;
        longitute:  number=0;
        detail:     string="";
        _links:Links=new Links;


}
