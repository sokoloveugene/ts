interface Admin {
  name: string;
  age: number;
  hasAccess: boolean;
}

interface User {
  name: string;
  age: number;
}

type Diff<T extends {}, U extends {}> = {
  [Key in
    | Exclude<keyof T, keyof U>
    | Exclude<keyof U, keyof T>]: Key extends keyof T
    ? T[Key]
    : Key extends keyof U
    ? U[Key]
    : never;
};

// Expected type { hasAccess: boolean }
type diff = Diff<Admin, User>;
