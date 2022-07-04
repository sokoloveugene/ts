interface IAnimal {
  name: string;
  tail: boolean;
}

interface IHuman {
  name: string;
  surname: string;
  age: number;
}

type GetRequiredInformation<TType> = TType extends IAnimal
  ? { nickname: string }
  : { socialSecurityNumber: number };

const requiredForAnimal: GetRequiredInformation<IAnimal> = {
  nickname: "White",
};

const requiredForHumen: GetRequiredInformation<IHuman> = {
  socialSecurityNumber: 12345,
};
