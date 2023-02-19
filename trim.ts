type Trim<S extends string> = S extends ` ${infer R}` | `${infer R} `
  ? Trim<R>
  : S;

type trimmed = Trim<"  Hello World  ">; // expected to be 'Hello World'
