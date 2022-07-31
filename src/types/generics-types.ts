interface Contact {
  id: number;
  name: string;
}

interface UserContact<TExternalId> {
  id: number;
  name: string;
  username: string;
  externalId: TExternalId;
  loadExternalId(): Task<TExternalId>;
}

function clone<T1, T2 extends T1>(source: T1): T2 {
  return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone<Contact, UserContact>(a);

const dateRange = { startDate: Date.now(), endDate: Date.now() };
const dateRangeCopy = clone(dateRange);

// Example

interface Todo {
  id: number;
  title: string;
  status: TodoStatus;
  completedOn?: Date;
}

enum TodoStatus {
  Todo = "todo",
  InProgress = "in-progress",
  Done = "done",
}

const todoItems: Todo[] = [
  {
    id: 1,
    title: "Learn HTML",
    status: TodoStatus.Done,
    completedOn: new Date("2021-09-11"),
  },
  { id: 2, title: "Learn TypeScript", status: TodoStatus.InProgress },
  { id: 3, title: "Write the best app in the world", status: TodoStatus.Todo },
];

function addTodoItem(todo: string): Todo {
  const id = getNextId(todoItems);

  const newTodo = {
    id,
    title: todo,
    status: TodoStatus.Todo,
  };

  todoItems.push(newTodo);

  return newTodo;
}

function getNextId<T extends { id: number }>(items: T[]): number {
  return items.reduce((max, x) => (x.id > max ? max : x.id), 0) + 1;
}

const newTodo = addTodoItem(
  "Buy lots of stuff with all the money we make from the app"
);

console.log(JSON.stringify(newTodo));
