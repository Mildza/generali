import { Injectable } from '@angular/core';

@Injectable()
export class PolicyService {

public selectOption: any;
 public selectPolice: any


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
      }, {
        id: 3,
        label: "Din Protekt",
        value: 2
      }, {
        id: 4,
        label: "Complete",
        value: 3
      }, {
        id: 5,
        label: "Complete Pro",
        value: 4
      }, {
        id: 6,
        label: "Stipendijksa Renta",
        value: 5
      }, {
        id: 7,
        label: "Junior 5+",
        value: 6
      }, {
        id: 8,
        label: "Classic",
        value: 7
      }, {
        id: 9,
        label: "Premium Protect",
        value: 8
      }, {
        id: 10,
        label: "Credit Life",
        value: 9
      }, {
        id: 11,
        label: "Premium Profit",
        value: 10
      }, {
        id: 12,
        label: "Mozaik",
        value: 11
      }, {
        id: 13,
        label: "Tandem",
        value: 12
      }
    ];
    this.selectPolice = this.selectOption[0];  
   }
  
    findPolicy(policy){
      var x = this.selectOption.length
      for(var i=0; i<x; i++) {
        if (this.selectOption[i].label=policy){
          return this.selectOption[i].id
        }
      }
      // return this.selectOption.label.find(policy)
    } 

}