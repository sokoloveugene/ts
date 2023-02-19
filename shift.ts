type Shift<A extends unknown[]> = A extends [infer _, ...infer R] ? R : A;

type Result = Shift<[3, 2, 1]>; // [2, 1]
