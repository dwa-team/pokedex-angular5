import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      // state(),
      transition('void =>*', [
        style({opacity: 0, transform: 'scale(0.5)'}),
        animate(2000, style({opacity: 1, transform: 'scale(1)'}))
      ])
    ])
  ]
})
export class AppComponent {
  public title = 'Hello World!';
}
