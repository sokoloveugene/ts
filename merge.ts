type foo = {
  name: string;
  age: string;
};

type coo = {
  age: number;
  sex: string;
};

type Merge<T extends {}, U extends {}> = {
  [Key in keyof T | keyof U]: Key extends keyof U
    ? U[Key]
    : Key extends keyof T
    ? T[Key]
    : never;
};

type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}
