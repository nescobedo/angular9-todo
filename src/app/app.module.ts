import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';

import { TodoDataService } from './todo/todo-data.service';
import { TodoService } from './todo/todo.service';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { MessageService } from './message.service';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { MessagesComponent } from './messages/messages.component';

import { httpInterceptorProviders } from './http-interceptors/index';

@NgModule({
	declarations: [AppComponent, TodoComponent, MessagesComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		InMemoryWebApiModule.forRoot(TodoDataService),
		FormsModule,
	],
	providers: [TodoService, HttpErrorHandlerService, MessageService, httpInterceptorProviders],
	bootstrap: [AppComponent],
})
export class AppModule {}
