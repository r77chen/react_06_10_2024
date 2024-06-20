class TodoController {
  #model;
  #view;
  constructor(model, view) {
    this.#model = model;
    this.#view = view;
    this.setUpEvents();
  }

  setUpEvents() {
    this.setUpDeleteEvent();
    this.setUpAddEvent();
  }

  setUpAddEvent() {
    this.#view.addTodoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newTodo = {
        task: this.#view.addTodoInput.value,
      };

      fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      })
        .then((res) => res.json())
        .then((_newTodo) => {
          this.#view.renderTodoElement(_newTodo);
          this.#model.addTodo(_newTodo);
        });
    });
  }

  setUpDeleteEvent() {
    this.#view.todoList.addEventListener("click", (e) => {
      if (e.target.classList.contains("todo-item__delete")) {
        const todoId = e.target.parentElement.getAttribute("id");
        this.#view.removeTodoElement(todoId);
      }
    });
  }
}
