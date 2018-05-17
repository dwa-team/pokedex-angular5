import { trigger, transition, style, animate, state} from '@angular/animations';

export let onup = trigger('onUp', [

        state('void', style({ transform: 'translateY(30px)'})),
        transition(':enter', [ // or 'void=>*
            animate(800)
        ])
    ])
