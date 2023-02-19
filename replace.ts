type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer S}${From}${infer E}` ? `${S}${To}${E}` : S;

type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
