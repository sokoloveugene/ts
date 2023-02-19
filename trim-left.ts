type TrimLeft<S extends string> = S extends ` ${infer R}`
  ? TrimLeft<R>
  : S;

type trimed = TrimLeft<"  Hello World  ">; // expected to be 'Hello World  '
