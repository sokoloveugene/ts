const foo = (arg1: string, arg2: number): void => {};

type MyParameters<F extends (...args: any[]) => any> = F extends (
  ...args: infer U
) => any
  ? U
  : [];

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
