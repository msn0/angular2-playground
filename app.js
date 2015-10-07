/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Todo = (function () {
    function Todo(text) {
        this.text = text;
        this.done = false;
    }
    return Todo;
})();
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
var AppComponent = (function () {
    function AppComponent() {
        this.todos = [];
    }
    AppComponent.prototype.add = function (text) {
        this.todos.push(new Todo(text));
    };
    AppComponent.prototype.remove = function (todo) {
        this.todos = this.todos.filter(function (t) {
            return t !== todo;
        });
    };
    AppComponent.prototype.markAsDone = function (todo) {
        todo.done = !todo.done;
    };
    AppComponent.prototype.filtered = function () {
        return this.todos.filter(function (todo) {
            return todo.done;
        }).length;
    };
    AppComponent = __decorate([
        angular2_1.Component({ selector: 'app' }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            templateUrl: 'app.html',
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
