//* TodoService serves data

//! (MODEL SERVICE) - V - C

import { Todo } from "./TodoModel";

export class TodoService {
  private localStorageKey = "TodoList";

  constructor() {
    const list = this.getAllTodos();
    Todo.lastKey = list.at(-1)?.todoKey ?? 0;
  }

  private saveTodoList(list: Todo[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(list));
  }

  //* Crud
  createTodo(item: string): Todo {
    const todo = new Todo(item);
    const list = this.getAllTodos();
    Todo.lastKey = list.at(-1)?.todoKey ?? 0;
    list.push(todo);
    this.saveTodoList(list);
    return todo;
  }

  //* cRud
  getTodo(todoKey: number): Todo | undefined {
    return this.getAllTodos().find((todo) => todo.todoKey == todoKey);
  }

  getAllTodos(): Todo[] {
    return JSON.parse(
      localStorage.getItem(this.localStorageKey) ?? "[]"
    ) as Todo[];
  }

  //*cruD
  deleteTodo(todoKey: number) {
    console.log("TodoService.deleteTodo", todoKey);
    let list = this.getAllTodos();
    list = list.filter((todo) => todo.todoKey !== todoKey);
    this.saveTodoList(list);
  }

  //* crUd
  updateTodo(todoKey: number, item: string) {
    const list = this.getAllTodos();
    const todo = list.find((todo: Todo) => todo.todoKey == todoKey);
    if (todo) {
      todo.todoItem = item;
      this.saveTodoList(list);
      return true;
    }
    return false;
  }
}
