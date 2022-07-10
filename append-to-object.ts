type AppendToObject<O extends object, K extends string, V> = {
  [Key in keyof O | K]: Key extends K
    ? V
    : Key extends keyof O
    ? O[Key]
    : never;
};

type Test = { id: "1" };
type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }
