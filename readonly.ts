interface Todo {
  title: string;
  description: string;
}

type MyReadonly<TObj> = {
  readonly [K in keyof TObj]: TObj[K];
};

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
