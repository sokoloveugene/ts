type AreEqual<A, B> = A extends B ? (B extends A ? true : false) : false;

type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? AreEqual<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
