import { Todo } from "./TodoModel";

//~? We are defining a CONTRACT for ALL providers
export interface ITodoService {
  createTodo(item: string): Promise<Todo>;
  getTodo(todoKey: number): Promise<Todo | undefined>;
  getAllTodos(): Promise<Todo[]>;
  deleteTodo(todoKey: number): Promise<Todo | boolean>;
  updateTodo(todoKey: number, todoItem: string): Promise<boolean>;
}
