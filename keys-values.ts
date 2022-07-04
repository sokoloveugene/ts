interface IUser {
  name: "John";
  surname: "Dou";
  age: 28;
}

/**
 * JS pseudocode
 * Object.keys(IUser)
 */
type TKeys = keyof IUser;

const field: TKeys = "age";

/**
 * JS pseudocode
 * Object.keys(IUser)
 */
type TValues = IUser[keyof IUser];

const value: TValues = "John";
