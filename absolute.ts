// A type that take string, number or bigint.
// The output should be a positive number string

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}`
  ? R
  : `${T}`;

type Test = -100;
type Result = Absolute<Test>; // expected to be "100"
