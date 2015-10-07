/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  directives: [NgFor],
  templateUrl: 'app.html'
})
class AppComponent {
  todos: Array<string>;

  constructor () {
    this.todos = [];
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

}

bootstrap(AppComponent);
