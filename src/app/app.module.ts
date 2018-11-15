import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';
import { TodoService } from './services/todo.service';
import { GenericTodoService } from './models/generic.todo.service';
import { TodoPipe } from './pipes/todo.pipe';
import { TodoComponent } from './todo/todo.component';
import { TestDirective } from './directives/test.directive';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    TodoPipe,
    TodoComponent,
    TestDirective,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: GenericTodoService,
      useClass: TodoService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
