
import { ArronLink } from "./arron-link";
import { DepartLink } from "./depart-link";
import { RegionLink } from "./region-link";
import { Self } from "./self";

export class Links {
    self:Self=new Self;
    departement: DepartLink=new DepartLink;
    codeRegion: RegionLink=new RegionLink;
    arron: ArronLink=new ArronLink;
}
