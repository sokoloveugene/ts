type PickByType<O extends {}, T> = {
  [Key in keyof O as O[Key] extends T ? Key : never]: O[Key];
};

type OnlyBoolean = PickByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { isReadonly: boolean; isEnable: boolean; }
