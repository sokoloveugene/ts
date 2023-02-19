interface User {
  name: string;
  age: number;
  address: string;
}

type PartialByKeys<O extends {}, K extends string> = Omit<
  {
    [Key in Exclude<keyof O, K>]: O[Key];
  } & {
    [Key in Extract<keyof O, K>]?: O[Key];
  },
  never
>;

// type PartialByKeys<O extends {}, K extends string> = Omit<
//   {
//     [Key in Extract<keyof O, K>]?: O[Key];
//   } & Omit<O, K>,
//   never
// >;

// { name?:string; age:number; address:string }
type UserPartialName = PartialByKeys<User, "name">;
