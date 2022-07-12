type MyCapitalize<S extends string> = S extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${R}`
  : S;

type capitalized = MyCapitalize<"hello world">; // expected to be 'Hello world'
