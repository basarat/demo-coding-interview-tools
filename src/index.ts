/** 
 * @return `true` if @param input is a palindrome, `false` otherwise
 * @example `madam` => true
 * @example `racecar` => true
 * @example `demo` => false
 */
export function isPalindrome(input: string): boolean {
  return input === input.split('').reverse().join('');
}
