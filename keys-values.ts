interface IUser {
  name: "John";
  surname: "Dou";
  age: 28;
}

/**
 * JS pseudocode
 * one of Object.keys(IUser)
 */
type TKeys = keyof IUser;

const field: TKeys = "age";

/**
 * JS pseudocode
 * one of Object.values(IUser)
 */
type TValues = IUser[keyof IUser];

const value: TValues = "John";
