import { Links } from "./links";

export class Commune {
    codeCom:    string="";
    name:       string="";
    superficie: number=0;
    population: number=0;
    latitude:   number=0;
    longitute:  number=0;
    detail:     string="";
    _links:Links=new Links;
}
