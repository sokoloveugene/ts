type FlattenOnce<A extends any[], R extends any[] = []> = A extends [
  infer H,
  ...infer T
]
  ? H extends any[]
    ? FlattenOnce<T, [...R, ...H]>
    : FlattenOnce<T, [...R, H]>
  : R;

type MinusOne<N extends number, A extends number[] = []> = [
  ...A,
  N
]["length"] extends N
  ? A["length"]
  : MinusOne<N, [...A, N]>;

type FlattenDepth<A extends any[], D extends number = 1> = D extends 0
  ? A
  : FlattenDepth<FlattenOnce<A>, MinusOne<D>>; // Flatt one;

type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
