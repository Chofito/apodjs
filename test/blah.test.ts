import { apod } from '../src';

// Implement some test witch custom keys and dates
describe('simpleTest', () => {
  it('works', () => {
    return apod()()
      .then(res => {
        expect(res.status).toEqual(200);
      });
  });
});
