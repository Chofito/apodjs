import { apod } from '../src';

// Implement some test with custom keys and dates
describe('simpleTest', () => {
  it('works', () => {
    return apod()()
      .then(res => {
        expect(!!res).toEqual(true);
      });
  });
});
