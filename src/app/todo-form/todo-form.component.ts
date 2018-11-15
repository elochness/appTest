import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  public todo = new Todo('', '', false);

  todoForm2: FormGroup;
  titleCtrl: FormControl;
  contentCtrl: FormControl;

  constructor(private fb: FormBuilder) { }

  registrer() {
    console.log(this.todoForm2.value);
  }

  ngOnInit() {
    this.titleCtrl = this.fb.control('', [ Validators.required, Validators.minLength(3)]);
    this.contentCtrl = this.fb.control('', Validators.required);

    this.todoForm2 = this.fb.group({
      title: this.titleCtrl,
      content: this.contentCtrl
    })

    this.contentCtrl
    .valueChanges
    .pipe (
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(newValue => console.log(newValue));

  }



  public submit(data) {
    console.log(data);
    console.log(this.todo);
  }

}
