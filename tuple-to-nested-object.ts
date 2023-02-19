type TupleToNestedObject<Path, T> = Path extends [
  infer F extends string,
  ...infer R
]
  ? {
      [Key in F]: TupleToNestedObject<R, T>;
    }
  : T;

type a = TupleToNestedObject<["a"], string>; // {a: string}
type b = TupleToNestedObject<["a", "b"], number>; // {a: {b: number}}
type c = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type