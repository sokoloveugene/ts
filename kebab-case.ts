type KebabCase<S extends string> = S extends `${infer F}${infer L}`
  ? L extends Uncapitalize<L>
    ? `${Uncapitalize<F>}${KebabCase<L>}`
    : `${Uncapitalize<F>}-${KebabCase<L>}`
  : S;

type className = KebabCase<"FooBarBaz">; // Expected foo-bar-baz
