type Reverse<A extends unknown[]> = A extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : A;

type a = Reverse<["a", "b"]>; // ['b', 'a']
type b = Reverse<["a", "b", "c"]>; // ['c', 'b', 'a']
