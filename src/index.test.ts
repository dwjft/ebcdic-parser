import { exampleFunction } from 's/index';

describe('example function', () => {
  it('should return exampleFunction output', () => {
    const result = exampleFunction();
    result.should.equal('example run!');
  });
});
