import { trigger, transition, style, animate, state } from "@angular/animations";

export let myFade = trigger('myfade', [
    state('void', style({opacity: 0})), 
    transition('void <=> *', [
      animate(800)
    ])
  ])