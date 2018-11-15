import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo';

@Pipe({
  name: 'todofilter'
})
export class TodoPipe implements PipeTransform {

  transform(todos: Array<Todo>, title: string): Array<Todo> {
    if (!todos) {
      return todos;
    }
    return todos.filter((elem) => {
      return elem.title === title;
    });    
  }

}
