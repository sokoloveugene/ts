// Implementation 1
// type MinusOne<N extends number, A extends number[] = []> = A["length"] extends N
//   ? A extends [infer _, ...infer R] // destricture first element and take rest length
//     ? R["length"]
//     : never
//   : MinusOne<N, [...A, N]>; // add element to A array

// Implementation 2
type MinusOne<N extends number, A extends number[] = []> = [
  ...A,
  N
]["length"] extends N
  ? A["length"]
  : MinusOne<N, [...A, N]>;

type Zero = MinusOne<1>; // 0
type FiftyFour = MinusOne<55>; // 54
