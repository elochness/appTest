import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';
import { TodoService } from './services/todo.service';
import { GenericTodoService } from './models/generic.todo.service';
import { TodoPipe } from './pipes/todo.pipe';
import { TodoComponent } from './todo/todo.component';
import { TestDirective } from './directives/test.directive';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { ErrorComponent } from './error/error.component';
import { Sub2Component } from './sub2/sub2.component';
import { LoginGuard } from './guards/login.guard';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'sub1', pathMatch: 'full'},
  { path: 'sub1', component: SubComponent,  canActivate: [LoginGuard]},
  { path: 'sub2', component: Sub2Component},
  { path: '**', component: ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    TodoPipe,
    TodoComponent,
    TestDirective,
    TodoFormComponent,
    ErrorComponent,
    Sub2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
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
