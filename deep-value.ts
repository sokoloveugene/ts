const deepValue = <
  TObj,
  /**
   * JS pseudocode
   * TKeyOne one of Object.keys(TObj)
   */
  TKeyOne extends keyof TObj,
  TKeyTwo extends keyof TObj[TKeyOne]
>(
  obj: TObj,
  keyOne: TKeyOne,
  keyTwo: TKeyTwo
) => {
  return obj[keyOne][keyTwo];
};

const user = {
  general: {
    name: "John",
    surname: "Dou",
  },
  age: 25,
};

deepValue(user, "general", "name");
