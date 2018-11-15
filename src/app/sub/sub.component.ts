import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { GenericTodoService } from '../models/generic.todo.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  public title = undefined;
  public data = 'tutu';
  public colorClass = '';
  public todos;
  public myfilter;

  constructor(private todoService: GenericTodoService) { }

  ngOnInit() {

    this.todos = this.todoService.getTodos();
    this.todos.push(new Todo('todo1','content', false));
    this.todos.push(new Todo('todo2','content', true));
    this.todos.push(new Todo('todo3','content', false));
    

    setTimeout(() => {
      this.title = {
        content : 'hello'
      }
    }, 3000);

  }

  public clickHandler(): void {
    console.log("you clicked me");
    this.colorClass = 'app-red-bg';
  }

  public validInput(param1: HTMLInputElement) {
    console.log(param1.value);
  }

  public addFilter(filter: HTMLInputElement): void {
    this.myfilter = filter.value;
  }

  public clickAddTodo(title: HTMLInputElement, content: HTMLInputElement): void {
    console.log("you clicked me 2");
    this.todoService.getTodos().push(new Todo(
      title.value,
      content.value,
      false
    ));
  }

  public todoSelect(todo: Todo) {
    console.log('event received form todo comp');
    console.log(todo);
  }

}
