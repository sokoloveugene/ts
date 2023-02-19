type Zip<T extends any[], U extends any[]> = {
  [Key in keyof T]: Key extends keyof U ? [T[Key], U[Key]] : never;
};

type exp = Zip<[1, 2], [true, false]>; // expected to be [[1, true], [2, false]]
