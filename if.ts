type If<A extends Boolean, B, C> = A extends true ? B : C;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
