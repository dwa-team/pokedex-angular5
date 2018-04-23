import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RopaService } from '../services/ropa.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], 
  providers: [RopaService]
})
export class HomeComponent implements OnInit {

  public listado_ropa:Array<string>;
  public prenda_a_guardar:string;

  constructor(
    // Variables
    private _route: ActivatedRoute,
    private _router: Router,

    // Services
    private _ropaService: RopaService
  ){}

  ngOnInit() {
    this.listado_ropa = this._ropaService.getRopa();
    console.log (this.listado_ropa);
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
