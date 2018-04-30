import { Component, OnInit } from '@angular/core';
import { ComicElement } from './comic-list';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})

export class ComicListComponent implements OnInit {

  public titleComicsComponents = "Componente de Lista de comics";
  public comics:Array<ComicElement>;
  public myColor:string;
  public color_seleccionado:string;
  public parametro: string;

  constructor( 
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.comics = [
      new ComicElement('IronMan', 1992, 'Marvel', 0, true),
      new ComicElement('SpiderMan', 1994, 'Marvel', 0, false),
      new ComicElement('Batman', 1942, 'DC', 0, true),
      new ComicElement('ChapulinColorado', 1991, 'Marvel', 0, false), 
    ] 
    this.myColor = 'green';
    this.color_seleccionado = 'peru';
  }

  ngOnInit() {
    this._route.params.forEach((params:Params) => {
      this.parametro = params['ident'];
    });
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
 
  verDetalles(_index) {
    this._router.navigate(['/comics/'+_index]);
  }

  volerAtras() {
    this._router.navigate(['/comics']);
  }

}
