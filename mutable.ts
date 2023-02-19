interface Todo {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
}

type Mutable<O extends {}> = {
  -readonly [Key in keyof O]: O[Key];
};

// { title: string; description: string; completed: boolean; }
type MutableTodo = Mutable<Todo>;
