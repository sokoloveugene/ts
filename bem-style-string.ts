// The Block, Element, Modifier methodology (BEM)
// is a popular naming convention for classes in CSS.

// For example, the block component would be represented as btn,
// element that depends upon the block would be represented as btn__price,
// modifier that changes the style of the block would be represented as
// btn--big or btn__price--warning.

// Implement BEM<B, E, M> which generate string union from these three parameters.
// Where B is a string literal, E and M are string arrays (can be empty).

type Add<Variants extends string[], Prefix extends string> = Variants extends []
  ? ""
  : `${Prefix}${Variants[number]}`;

type BEM<
  B extends string,
  E extends string[] = [],
  M extends string[] = []
> = `${B}${Add<E, "__">}${Add<M, "--">}`;

// "Login__Form--Primary" |
// "Login__Form--Secondary" |
// "Login__Card--Primary" |
// "Login__Card--Secondary"
type test = BEM<"Login", ["Form", "Card"], ["Primary", "Secondary"]>;
