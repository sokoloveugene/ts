interface User {
  name?: string;
  age?: number;
  address: string;
}

type RequiredByKeys<O extends {}, K extends keyof O> = Omit<
  Required<Pick<O, K>> & Omit<O, K>,
  never
>;

// { name: string; age?: number; address?: string }
type UserRequiredName = RequiredByKeys<User, "name">;
