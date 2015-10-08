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
        this.completed = false;
    }
    return Todo;
})();
var AppComponent = (function () {
    function AppComponent() {
        this.todos = [];
    }
    AppComponent.prototype.add = function (text) {
        if (text.value === '') {
            return;
        }
        this.todos.unshift(new Todo(text.value));
        text.value = '';
    };
    AppComponent.prototype.remove = function (todo) {
        this.todos = this.todos.filter(function (t) {
            return t !== todo;
        });
    };
    AppComponent.prototype.toggleCompleted = function (todo) {
        todo.completed = !todo.completed;
    };
    AppComponent.prototype.left = function () {
        return this.todos.length - this.todos.filter(function (t) {
            return t.completed;
        }).length;
    };
    AppComponent.prototype.completeAll = function () {
        this.todos.forEach(function (t) {
            t.completed = true;
        });
    };
    AppComponent = __decorate([
        angular2_1.Component({ selector: 'app' }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            templateUrl: 'app.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
