//~* TodoService serves data

import { ITodoService } from "./ITodoService";
import { Todo } from "./TodoModel";

//~? MODEL (Service) - V - C
export class TodoLocalService implements ITodoService {
  private localStorageKey!: "TodoList"; // Exclamation mark here means non-null assertion operator, it guarantees that the value will be always other than undefined.

  constructor() {
    this.init();
  }

  async init() {
    const list = await this.getAllTodos();
    Todo.lastKey = list.at(-1)?.todoKey ?? 0;
    // The code above means that if last index of list has todoKey value, assign it to Todo.lastKey, if not assign 0
    // at(-1): last index, ??: Nullish coalescing operator, checks if the left part is either null or undefined, it does not treat falsy values as false like ||
  }

  //~? Crud
  async createTodo(item: string): Promise<Todo> {
    const todo = new Todo(item);
    const list = await this.getAllTodos();
    Todo.lastKey = list.at(-1)?.todoKey ?? 0;
    list.push(todo);
    this.saveTodoList(list);
    return todo;
  }

  //~* cRud
  async getTodo(todoKey: number): Promise<Todo | undefined> {
    return (await this.getAllTodos()).find((todo) => todo.todoKey == todoKey);
  }

  async getAllTodos(): Promise<Todo[]> {
    const result = JSON.parse(
      localStorage.getItem(this.localStorageKey) ?? "[]"
    );
    return result;
  }

  //~! cruD
  async deleteTodo(todoKey: number): Promise<boolean | Todo> {
    console.log("TodoService.deleteTodo: ", todoKey);
    let list = await this.getAllTodos();
    list = list.filter((todo) => todo.todoKey != todoKey);
    this.saveTodoList(list);
    return true;
  }

  //~% crUd
  async updateTodo(todoKey: number, item: string): Promise<boolean> {
    const list = await this.getAllTodos();
    const todo = list.find((todo: Todo) => todo.todoKey == todoKey);
    if (todo) {
      todo.todoItem = item;
      this.saveTodoList(list);
      return true;
    }
    return false;
  }

  private saveTodoList(list: Todo[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(list));
  }
}
