# EBCDIC Number Parser

This is a really simple package built for parsing EBCDIC "Zoned Decimal" numbers.

## Installation

    npm i --save ebcdic-parser

## Usage

```typescript
import { parse } from 'ebcdic-parser';

const result = parse('0001529B', 2); // string, decimal places (default 2)
console.log(result);
// output: 152.92
```

## Map

```js
const chars = {
  negative: ['}', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'],
  positive: ['{', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
};
```

The index of a char is the number it represents. For example, `J` is equal to `-1`.

If the char is not found, the char provided will be returned. Commonly, that would be `1` in place of `A`.

## Examples

See `./src/index.test.ts`.
