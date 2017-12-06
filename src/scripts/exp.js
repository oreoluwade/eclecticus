// Holds the logic for a function and a constant.

export const userinfo = {
  username: 'oreoluwade',
  hobbies: ['coding', 'scrabble', 'reading', 'poetry'],
  occupation: 'web development',
  location: 'earth',
};

export const passOnlyArrays = (item) => {
  if (Array.isArray(item)) {
    return item;
  }
  const inputType = typeof item;
  return `Cannot return value for type ${inputType}`;
};
