import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { APIService } from './api.service';
import { GenericTodoService } from '../models/generic.todo.service';

@Injectable()
export class TodoService implements GenericTodoService {
  

  public todos = new Array();

  constructor(private api: APIService) { }

  getTodos(): Todo[] {
    return this.todos;
  }

}
