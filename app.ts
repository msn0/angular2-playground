/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, Pipe, bootstrap, NgFor} from 'angular2/angular2';

class Todo {
  text:string;
  completed:boolean;

  constructor(text:string) {
    this.text = text;
    this.completed = false;
  }
}

@Component({ selector: 'app' })
@View({
  directives: [NgFor],
  templateUrl: 'app.html'
})
class AppComponent {
  todos:Array<Todo>;

  constructor() {
    this.todos = [];
  }

  add(text) {
    if (text.value === '') {
      return;
    }
    this.todos.unshift(new Todo(text.value));
    text.value = '';
  }

  remove(todo:Todo) {
    this.todos = this.todos.filter((t) => {
      return t !== todo;
    });
  }

  toggleCompleted(todo:Todo) {
    todo.completed = !todo.completed;
  }

  left() {
    return this.todos.length - this.todos.filter((t) => {
      return t.completed;
    }).length;
  }

  completeAll() {
    this.todos.forEach((t) => {
      t.completed = true;
    });
  }

}

bootstrap(AppComponent);
