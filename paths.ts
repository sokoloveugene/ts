interface User {
  timestamp: string;
  user: {
    _id: string;
    isAdmin: boolean;
    main: {
      name: string;
      surname: string;
      birth: string;
      country: { code: number; name: string, hobbies: {hobbie: string}[] }[];
    };
  };
}

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${"" extends P ? "" : "."}${P}`
    : never
  : never;

type Paths<T> = T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | Join<K, Paths<T[K]>>
        : never;
    }[keyof T]
  : "";

type keys = Paths<User>;
