import Validator from '../index';

test.each([
  ['m00n-_-girl', true],
  ['R00MAN_22', false],
  ['m00n=_=girl', false],
  ['Маша', false],
  ['Ivan0va-A_n_n_a', true],
  ['Ivan0va-A_5555a', false],
])// eslint-disable-next-line
('testing validateUsername method with %s user name', (username, expected) => {
  const validator = new Validator;
  const result = validator.validateUsername(username);
  expect(result).toBe(expected);
});