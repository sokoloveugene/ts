type Reverse<T extends any[]> = T extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : T;

type FlipArguments<Fn> = Fn extends (...args: infer Args) => infer R
  ? (...args: Reverse<Args>) => R
  : never;

type Flipped = FlipArguments<
  (arg0: string, arg1: number, arg2: boolean) => void
>;
// (arg0: boolean, arg1: number, arg2: string) => void
