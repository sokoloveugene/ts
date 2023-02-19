type StartsWith<S extends string, C extends string> = S extends `${C}${string}`
  ? true
  : false;

type a = StartsWith<"abc", "ac">; // expected to be false
type b = StartsWith<"abc", "ab">; // expected to be true
type c = StartsWith<"abc", "abcd">; // expected to be false
