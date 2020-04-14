import { animate, style, transition, state, trigger, stagger, query } from '@angular/animations';

export let Animations = {
	fadeInOut: trigger('fadeInOut', [
		state('void', style({ opacity: 0 })),
		transition(':enter', [
			style({ opacity: '0' }),
			animate('.15s 150ms', style({ opacity: '1' })),
		]),
		transition(':leave', [style({ opacity: '1' }), animate('.15s', style({ opacity: '0' }))]),
	]),
	listAnimation: trigger('listAnimation', [
		transition('* <=> *', [
			query(
				':enter',
				[
					style({ opacity: 0 }),
					stagger('120ms', animate('200ms ease-out', style({ opacity: 1 }))),
				],
				{ optional: true }
			),
			query(':leave', animate('160ms ease-in', style({ right: '-120px' })), {
				optional: true,
			}),
		]),
	]),
};
