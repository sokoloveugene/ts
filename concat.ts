type Concat<A extends any[], B extends any[]> = [...A, ...B];

type Result = Concat<[1], [2]>; // expected to be [1, 2]
