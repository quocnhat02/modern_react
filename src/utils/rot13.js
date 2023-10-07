const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const separator = '';
const offset = 13;

function getOffsetLetter(letter) {
  return letters[(letters.indexOf(letter) + offset) % letters.length];
}

function translate(item) {
  return letters.includes(item) ? getOffsetLetter(item) : item;
}

function convertStrToUppercaseArray(input) {
  return input.toUpperCase().split(separator);
}

function rot13(str) {
  return convertStrToUppercaseArray(str).map(translate).join(separator);
}

console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'));
