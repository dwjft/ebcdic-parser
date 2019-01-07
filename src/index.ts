const chars = {
  negative: ['}', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'],
  positive: ['{', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
};

function findChar(char) {
  function findIndex(type) {
    return chars[type].findIndex(c => c === char);
  }
  const nIndex = findIndex('negative');
  if (nIndex !== -1) {
    return [nIndex, true];
  }
  const pIndex = findIndex('positive');
  if (pIndex !== -1) {
    return [pIndex, false];
  }
  return [char, false];
}

function sub(str: string, start: number, end?: number) {
  return str.substring(start, end);
}

export function parse(value: string, decimals: number = 2): number {
  const stringLength = value.length - decimals;

  const [number, decimalValue] = [sub(value, 0, stringLength), sub(value, stringLength)];
  const [decimal, char] = [sub(decimalValue, 0, decimals - 1), sub(decimalValue, decimals - 1)];
  const [index, isNegative] = findChar(char);

  if (index === -1) {
    throw new Error(`unrecognized char found in ${value}`);
  }

  const finalDecimal = `${Number(decimal)}${Number(index)}`;
  const finalNumber = Number(`${Number(number)}.${Number(finalDecimal)}`);

  return isNegative ? -finalNumber : finalNumber;
}
