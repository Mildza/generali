import { Injectable } from '@angular/core';

@Injectable()
export class PolicyService {

public selectOption: any;
 public selectPolice: any


 // Array of Policy names
  constructor() {
    this.selectOption = [
      {
        id: 1,
        label: "Izaberi Polisu",
        value: 0
      }, {
        id: 2,
        label: "Providenca",
        value: 1
      },{
        id: 3,
        label: "Horizont",
        value: 2
      }, {
        id: 4,
        label: "Din Protekt",
        value: 3
      }, {
        id: 5,
        label: "Complete",
        value: 4
      }, {
        id: 6,
        label: "Complete Pro",
        value: 5
      }, {
        id: 7,
        label: "Stipendijksa Renta",
        value: 6
      }, {
        id: 8,
        label: "Junior 5+",
        value: 7
      }, {
        id: 9,
        label: "Classic",
        value: 8
      }, {
        id: 10,
        label: "Premium Protect",
        value: 9
      }, {
        id: 11,
        label: "Credit Life",
        value: 10
      }, {
        id: 12,
        label: "Premium Profit",
        value: 11
      }, {
        id: 13,
        label: "Mozaik",
        value: 12
      }, {
        id: 14,
        label: "Tandem",
        value: 13
      }
    ];
    this.selectPolice = this.selectOption[0];  
   }

  // Compare Police from database
    findPolicy(policy){
      var x = this.selectOption.length
      for(var i=0; i<x; i++) {
        if (this.selectOption[i].label=policy){
          return this.selectOption[i].id
        }
      }
    } 

}