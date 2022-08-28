import { isPalindrome } from './index';

test('should return true for Palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
});

test('should return false for not a Palindrome', () => {
  expect(isPalindrome('demo')).toBe(false);
});