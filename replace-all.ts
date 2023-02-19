type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer H}${From}${infer E}`
  ? ReplaceAll<`${H}${To}${E}`, From, To>
  : S;

type replaced = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'
