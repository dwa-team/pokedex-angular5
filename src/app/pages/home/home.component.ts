import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RopaService } from '../../services/ropa.service';
import { PeticionService } from '../../services/peticion.service';
import { fade } from "../../animations/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], 
  providers: [RopaService, PeticionService],
  animations: [
    fade
  ]

/*

  animations: [

    trigger('fade', [

      transition('void =>*', [
        style({ opacity: 0}),
        animate(1500)
      ]),

      transition('* =>void', [
        animate(1000, style({ opacity: 0}))
      ])

    ])
  ]

*/


})
export class HomeComponent implements OnInit {

  public listado_ropa:Array<string>;
  public prenda_a_guardar:string;

  constructor(
    // Variables
    private _route: ActivatedRoute,
    private _router: Router,

    // Services
    private _ropaService: RopaService,
    private _peticionService: PeticionService
  ){}

  ngOnInit() {
    // Llamando al servicio _ropaService
    this.listado_ropa = this._ropaService.getRopa();

    // Llamando al servicio _peticionService 
    this._peticionService.getArticulos().subscribe(
      result => {
        console.log(result);
      },
      error => {
        var errorMsj = <any>error;
        console.log(errorMsj);
      }
    );
  }

  guardarPrenda() {
    if(this.prenda_a_guardar) {
      this._ropaService.addRopa(this.prenda_a_guardar);
      this.prenda_a_guardar = null;
    }
  }

  eliminarPrenda(index:number) {
    this._ropaService.deleteRopa(index);
  }

  irAComics() {
    this._router.navigate(['/comics']);
  }

}
