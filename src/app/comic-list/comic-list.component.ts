import { Component, OnInit } from '@angular/core';
import { ComicElement } from './comic-list';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})

export class ComicListComponent implements OnInit {

  public titleComicsComponents = "Componente de Lista de comics";
  public comics:Array<ComicElement>;
  public color:string;
  public color_seleccionado:string;

  constructor() { 
    this.comics = [
      new ComicElement('IronMan', 1992, 'Marvel', 0, true),
      new ComicElement('SpiderMan', 1994, 'Marvel', 0, false),
      new ComicElement('Batman', 1942, 'DC', 0, true),
      new ComicElement('ChapulinColorado', 1991, 'Marvel', 0, false), 
    ] 
    this.color = 'green';
    this.color_seleccionado = 'peru';
  }

  ngOnInit() {
    // Diferenciando let y var
    let uno = 1;
    var dos = 3;

    if(uno === 1) {
      let uno = 67;
      // var uno = 67;
      // console.log("DENTRO DEL IF " +  uno);
    }
    // console.log("FUERA DEL IF " + uno);
  }

  myEvent(event){
    alert("´Sup bro!");
    console.log(event);
  }

  gestionarLike(index, okLike) {
    if (okLike) {
      this.comics[index].likes += 1;
    } else {
      this.comics[index].likes -= 1;
    }
  }

  imprimirColorSelec() {
    console.log(this.color_seleccionado);
  }
 

}
