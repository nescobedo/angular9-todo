import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo';

@Injectable({
	providedIn: 'root',
})
export class TodoDataService implements InMemoryDbService {
	constructor() {}
	createDb() {
		const todos: Todo[] = [
			{
				id: 1,
				description: 'all-purpose flour',
				completed: false,
			},
			{
				id: 2,
				description: '2 bunch celery',
				completed: false,
			},
			{
				id: 3,
				description: '2 green bell peppers',
				completed: false,
			},
			{
				id: 4,
				description: 'large yellow onion',
				completed: false,
			},
			{
				id: 5,
				description: '2-3 cloves garlic',
				completed: false,
			},
			{
				id: 6,
				description: 'chicken broth',
				completed: false,
			},
			{
				id: 7,
				description: 'andouille sausage',
				completed: false,
			},
			{
				id: 8,
				description: '1lb shrimp',
				completed: false,
			},
			{
				id: 9,
				description: 'long grain rice',
				completed: false,
			},
		];

		return { todos };
	}
}
