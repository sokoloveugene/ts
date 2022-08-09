type EndsWith<S extends string, C extends string> = S extends `${string}${C}`
  ? true
  : false;

type a = EndsWith<"abc", "bc">; // expected to be true
type b = EndsWith<"abc", "abc">; // expected to be true
type c = EndsWith<"abc", "d">; // expected to be false
