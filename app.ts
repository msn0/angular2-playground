/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, Pipe, bootstrap, NgFor} from 'angular2/angular2';

class Todo {
  text:string;
  done:boolean;

  constructor(text:string) {
    this.text = text;
    this.done = false;
  }
}

//@Pipe({name: 'done'})
//class Done {
//  transform(todos:Array<Todo>, args:any[]) {
//    var a = todos.filter(function (todo:Todo) {
//      return todo.done;
//    });
//    debugger;
//    return JSON.stringify(todos);
//  }
//}

@Component({selector: 'app'})
@View({
  directives: [NgFor],
  templateUrl: 'app.html',
  //pipes: [Done]
})
class AppComponent {
  todos:Array<Todo>;

  constructor() {
    this.todos = [];
  }

  add(text:string) {
    this.todos.push(new Todo(text));
  }

  remove(todo:Todo) {
    this.todos = this.todos.filter(function (t:Todo) {
      return t !== todo;
    });
  }

  markAsDone(todo) {
    todo.done = !todo.done;
  }

  filtered() {
    return this.todos.filter(function (todo:Todo) {
      return todo.done;
    }).length;
  }

}

bootstrap(AppComponent);
