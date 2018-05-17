import { Component, OnInit } from '@angular/core';
import { Carro }  from './carros';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.scss']
})
export class FormularyComponent implements OnInit {
  public carro:Carro;

  constructor() { 
    this.carro = new Carro("", "", "");
  }

  onSubmit() {
    console.log(this.carro);
  }

  ngOnInit() {
  }

}
