type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type DeepReadonly<T extends object> = {
  readonly [Key in keyof T]: T[Key] extends object
    ? DeepReadonly<T[Key]>
    : T[Key];
};

type Todo = DeepReadonly<X>; // should be same as `Expected`

const a: Todo = {
  x: {
    a: 1,
    b: "hi",
  },
  y: "hey",
};
