var Todo = (function () {
  function Todo() {
    this.done = false;
  }

  Todo.prototype.markAsDone = function () {
    this.done = !this.done;
  };
  return Todo;
})();
exports.Todo = Todo;
