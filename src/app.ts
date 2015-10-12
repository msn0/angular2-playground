import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Todo} from './todo';

@Component({
  selector: 'app',
  directives: [CORE_DIRECTIVES],
  templateUrl: 'templates/app.html'
})
export class App {
  todos:Array<Todo> = [];

  add(text) {
    if (text.value === '') {
      return;
    }
    this.todos.push(new Todo(text.value));
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
