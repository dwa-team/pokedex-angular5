import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tag-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.scss']
})
export class FrutasComponent implements OnInit {

  public title:string;
  public year:number;
  public myArray:Array<any>;
  
  
  constructor() {
    // Asignando valores de propiedades
    this.title = "FRUTAS COMPONENT";
    this.year = 12;
    this.myArray = [1, "xcx", true];
  }

  ngOnInit() {
    // Métodos
    this.imprimir(this.title);
  }

  imprimir(text) {
    console.log(text);
  }

}
