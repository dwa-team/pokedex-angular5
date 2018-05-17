import { Component } from '@angular/core';
import { fade } from "./animations/animations";
import { onup } from "./animations/onup";
// import { fade } from "./animations/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fade, onup ]
})

export class AppComponent {
  public title = 'Hello World!';
}
