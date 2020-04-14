import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

import { TodoService } from './todo.service';
import { Todo } from './todo';

import { Animations } from '../shared/animations';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss'],
	animations: [Animations.listAnimation, Animations.fadeInOut],
})
export class TodoComponent implements OnInit {
	newTodo: string;
	todos: Todo[] = [];
	viewMessages: boolean;

	constructor(private todoService: TodoService, public messageService: MessageService) {}

	ngOnInit(): void {
		this.newTodo = '';
		this.viewMessages = false;
		this.getAllTodos();
	}

	getAllTodos() {
		this.todoService.getTodos().subscribe((data: Todo[]) => {
			this.todos = data;
		});
	}

	addTodo(event) {
		const tempObj: Todo = {
			id: null,
			description: this.newTodo,
			completed: false,
		};
		this.todos.push(tempObj);

		// Generate todo id then create todo
		this.todoService.getTodos().subscribe((allTodos: Todo[]) => {
			// Generate todo id - this would be handled by server in live api
			const maxIndex = allTodos.length - 1;
			const todoWithMaxIndex = allTodos[maxIndex];
			const todoId = todoWithMaxIndex.id + 1;
			tempObj.id = todoId;

			// Create todo
			this.todoService.createTodo(tempObj).subscribe(data => {});
		});

		this.newTodo = '';
		event.preventDefault();
	}

	deleteTodo(id) {
		this.todos = this.todos.filter(todo => todo.id !== id);
		this.todoService.deleteTodo(id).subscribe(data => {});
	}

	updateTodo(todo) {
		this.todoService.updateTodo(todo).subscribe(data => {});
	}
}
