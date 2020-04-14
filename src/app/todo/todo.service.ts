import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Todo } from './todo';
import { HttpErrorHandlerService, HandleError } from '../http-error-handler.service';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
	}),
};

@Injectable({
	providedIn: 'root',
})
export class TodoService {
	SERVER_URL = 'http://localhost:8080/api';
	private handleError: HandleError;

	constructor(private httpClient: HttpClient, httpErrorHandler: HttpErrorHandlerService) {
		this.handleError = httpErrorHandler.createHandleError('TodosService');
	}

	public getTodos() {
		const url = `${this.SERVER_URL}/todos/`;
		return this.httpClient.get(url).pipe(catchError(this.handleError('getTodos', [])));
	}

	public getTodo(id) {
		const url = `${this.SERVER_URL}/todos/${id}`;
		return this.httpClient.get(url);
	}
	public createTodo(todo: Todo) {
		const url = `${this.SERVER_URL}/todos/`;
		return this.httpClient
			.post(url, todo, httpOptions)
			.pipe(catchError(this.handleError('createTodo', [])));
	}

	public deleteTodo(id: number) {
		const url = `${this.SERVER_URL}/todos/${id}`;
		return this.httpClient
			.delete(url, httpOptions)
			.pipe(catchError(this.handleError('deleteTodo', [])));
	}

	public updateTodo(todo: Todo) {
		const url = `${this.SERVER_URL}/todos/${todo.id}`;
		return this.httpClient
			.put(url, todo, httpOptions)
			.pipe(catchError(this.handleError('updateTodos', [])));
	}
}
