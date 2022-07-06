type ExampleType = Promise<string>;

type MyAwaited<T> = T extends Promise<infer K>
  ? K extends Promise<any>
    ? MyAwaited<K>
    : K
  : T;

type Result = MyAwaited<ExampleType>; // string
