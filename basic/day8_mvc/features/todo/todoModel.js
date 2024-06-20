class TodoModel {
  #todos;
  constructor() {
    this.#todos = [];
  }

  getTodos() {
    return [...this.#todos];
  }

  addTodo(newTodo) {
    this.#todos.push(newTodo);
  }

  removeTodo(id) {
    this.#todos = this.#todos.filter((todo) => todo.id !== id);
  }
}
