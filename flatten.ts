type Flatten<T extends any[], U extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? F extends any[]
    ? Flatten<[...F, ...R], U>
    : Flatten<R, [...U, F]>
  : U;

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]
