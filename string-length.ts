type Length<
  S extends string,
  A extends any[] = []
> = S extends `${infer F}${infer R}` ? Length<R, [...A, F]> : A["length"];

type name = Length<"John">; // Expected 4
