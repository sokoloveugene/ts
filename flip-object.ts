type Flip<O extends Record<string, any>> = {
  [Key in keyof O as `${O[Key]}`]: Key;
};

type Variant1 = Flip<{ a: "x"; b: "y"; c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
type Variant2 = Flip<{ a: 1; b: 2; c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type Variant3 = Flip<{ a: false; b: true }>; // {false: 'a', true: 'b'}
