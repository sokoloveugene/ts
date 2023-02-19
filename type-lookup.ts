interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type LookUp<I extends { type: string }, K> = I extends { type: K } ? I : never;

type LookUp2<I, K> = I extends { type: infer T; [prop: string]: any }
  ? T extends K
    ? I
    : never
  : never;

type MyDogType = LookUp<Cat | Dog, "dog">; // expected to be `Dog`

type MyDogType2 = LookUp2<Cat | Dog, "dog">; // expected to be `Dog`
