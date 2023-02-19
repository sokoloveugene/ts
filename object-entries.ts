interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ObjectEntries<T extends {}> = {
  [Key in keyof T]: [Key, T[Key]];
}[keyof T];

// ['name', string] | ['age', number] | ['locations', string[] | null];
type modelEntries = ObjectEntries<Model>;
