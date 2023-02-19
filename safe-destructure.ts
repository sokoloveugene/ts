enum EName {
  John = "John",
  Mary = "Mary",
  Peter = "Peter",
}

const hook = <T extends ReadonlyArray<EName>>(
  names: T
): Partial<Record<T[number], boolean>> => {
  return names.reduce(
    (acc, name) => ({
      ...acc,
      [name]: true,
    }),
    {}
  );
};

const { [EName.Mary]: mary, [EName.John]: john } = hook([
  EName.John,
  EName.Mary,
]);

// Property 'Peter' does not exist on type 'Partial<Record<EName.John | EName.Mary, boolean>>'
// const { [EName.Peter]: Peter } = hook([EName.John, EName.Mary]);
