import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Animations } from '../shared/animations';

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.scss'],
	animations: [Animations.listAnimation, Animations.fadeInOut],
})
export class MessagesComponent implements OnInit {
	constructor(public messageService: MessageService) {}

	ngOnInit(): void {}
}
