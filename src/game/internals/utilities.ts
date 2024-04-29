export const reverseObject = (a: object): object => {
  return Object.fromEntries(
    Object.entries(a).map(([key, value]) => [value, key])
  );
};
