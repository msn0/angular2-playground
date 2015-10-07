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

  add(todo: string) {
    this.todos.push(todo);
  }

  remove(todo: string) {
    this.todos = this.todos.slice(0,this.todos.indexOf(todo)).concat(this.todos.slice(this.todos.indexOf(todo)+1));
    // or simply
    // this.todos.splice(this.todos.indexOf(todo));
  }

}

bootstrap(AppComponent);
