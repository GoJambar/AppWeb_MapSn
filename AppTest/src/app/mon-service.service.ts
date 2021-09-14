import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonServiceService {

  

  constructor() { }

  index:  number=0;
  name="";

  localite=[
    {
      name:'Dakar',
      superficie:'21548',
      habitant:'858',
      
    },
    {
      name:'Saint-Louis',
      superficie:'88596',
      habitant:'8888889'
    },
    {
      name:'Thies',
      superficie:'',
      habitant:''
    },
    {
      name:'Diourbel',
      superficie:'',
      habitant:''
    },
    {
      name:'Kédougou',
      superficie:'',
      habitant:''
    },
    {
      name:'Sedhiou',
      superficie:'',
      habitant:''
    },
    {
      name:'Fatick',
      superficie:'',
      habitant:''
    },
    {
      name:'Kaffrine',
      superficie:'',
      habitant:''
    },
    {
      name:'Kaolack',
      superficie:'',
      habitant:''
    },
    {
      name:'Louga',
      superficie:'',
      habitant:''
    },
    {
      name:'Tambacounda',
      superficie:'',
      habitant:''
    },
    {
      name:'Matam',
      superficie:'',
      habitant:''
    },
    {
      name:'Kolda',
      superficie:'',
      habitant:''
    },
    {
      name:'Ziguinchor',
      superficie:'',
      habitant:''
    }
  
    ];
    arrondi=[
      {
        name:"Dakar",
        value:["Almadie","Dakar Plateau","Grand Dakar","Parcelles Assainies","Guediawaye","Niayes",
        "Pikine Dagoudane","Thiaroye","Bambilor","Rufisque"]
      },
      {
        name:"Saint-Louis",
        value:["Dagana","Podor","Saint-Louis"]
      },
      {
        name:"Thies",
        value: ["Mbour","Thies","Tivaoune"]
      },
      {
        name:"Diourbel",
        value:["Bambey","Diourbel","Mbacké"]
      },
      {
        name:"Kedougou",
        value:["Kédougou","Salémata","Saraya"]
      },
      {
        name:"Sediou",
        value:["Bounkiling","Goudomp","Sédhiou"]
      },
      {
        name:"Fatick",
        value:["Fatick","Foundiougne","Gossas"]
      },
      {
        name:"Kaffrine",
        value:["Birkilane","Kaffrine","Kougheul","Malème Hodar"]
      },
      {
        name:"Kaolack",
        value:["Guinguinéo","Kaolack","Nioro du Rip"]
      },
      {
        name:'Louga',
        value:["Kébémer","Linguére","Louga"]
      },
      {
        name:'Tambacounda',
       value:["Bakel","Goudiry","Koupentoum"]
      },
      {
        name:'Matam',
       value:["Kanel","Matam","Ranérou Ferlo"]
      },
      {
        name:'Kolda',
        value:["Kolda","Médina Yoro Fouta"]
      },
      {
        name:'Ziguinchor',
        value:["Bignona","Oussouye","Ziguinchor"]
      }
 
    ];
  }
