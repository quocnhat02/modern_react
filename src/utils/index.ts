const capitalize = (input: string) => {
  return input.charAt(0).toUpperCase() + input.substring(1, input.length);
};

const reverse = (input: string) => {
  return input.split('').reverse().join('');
};

const fancyFunc = (input: string[], transform: (s: string) => string) => {
  const result = [];

  for (let i = 0; i < input.length; i++) {
    const element = transform(input[i]);
    result.push(element);
  }

  return result;
};

const capitalizeAll = (input: string[]) => fancyFunc(input, capitalize);
const reverseAll = (input: string[]) => fancyFunc(input, reverse);

const capitalizeAllWithMap = (input: string[]) => input.map(capitalize);
const reverseAllWithMap = (input: string[]) => input.map(reverse);

export {};
