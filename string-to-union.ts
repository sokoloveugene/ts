type StringToUnion<S extends string> = S extends `${infer F}${infer R}`
  ? F | StringToUnion<R>
  : never;

type Test = "123";
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
