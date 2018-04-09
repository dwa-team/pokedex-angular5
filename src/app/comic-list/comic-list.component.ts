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

  public myEvent(event){
    alert("´Sup bro!");
    console.log(event);
  }

  constructor() { 
    this.comics = [
      new ComicElement('IronMan', 1992, 'Marvel', true),
      new ComicElement('SpiderMan', 1994, 'Marvel', true),
      new ComicElement('Batman', 1942, 'DC', true),
      new ComicElement('ChapulinColorado', 1991, 'Marvel', true), 
    ] 
    
  }

  ngOnInit() {
  }

}
