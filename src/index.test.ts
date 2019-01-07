import { parse } from 's/index';

describe('ebcdic-parser', () => {
  describe('parse', () => {
    [
      ['0001529B', 152.92],
      ['00015292', 152.92],
      ['0000119R', -11.99],
      ['0000118A', 11.81],
      ['0000332}', -33.20],
      ['0000100{', 10.00],
    ].forEach(([edcdic, value]: [string, number]) => {
      it(`it should convert ${edcdic} to ${value}`, () => {
        const result = parse(edcdic);
        result.should.equal(value);
      });
    });
  });
});
