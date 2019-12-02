import { validateNumber, toRoman, toArabic } from '../utils/convert'

// Validator: it returns undefined if the numbers passes it
test('Should return undefined (valid number). In this case, CLXVI (166)', () => {
  expect(validateNumber('CLXVI')).toBeUndefined()
})

test('Should return undefined (valid number). In this case, MCCXXXIV (1234)', () => {
  expect(validateNumber('MCCXXXIV')).toBeUndefined()
})

test('Should return undefined (valid number). In this case, MMMCMXCIX (3999)', () => {
  expect(validateNumber('MMMCMXCIX')).toBeUndefined()
})

test('Should return "Invalid Roman numeral". In this case, MMMM (4000)', () => {
  expect(validateNumber('MMMM')).toBe('Invalid Roman numeral')
})

test('Should return "Invalid Roman numeral". In this case, VV ("not a Roman number")', () => {
  expect(validateNumber('VV')).toBe('Invalid Roman numeral')
})

test('Should return "Invalid Roman numeral". In this case, CXD ("not a Roman number")', () => {
  expect(validateNumber('CXD')).toBe('Invalid Roman numeral')
})

// Operations

// Valid Operations
const num1 = 'XVII' // 17
const num2 = 'III' // 3
const add1 = toRoman(toArabic(num1) + toArabic(num2)) // 17 + 3
const sub1 = toRoman(toArabic(num1) - toArabic(num2)) // 17 - 3
const mul1 = toRoman(toArabic(num1) * toArabic(num2)) // 17 * 3

test('Should return XX (17+3 = 20)', () => {
  expect(add1).toBe('XX')
})

test('Should return XIV (17-3 = 14)', () => {
  expect(sub1).toBe('XIV')
})

test('Should return LI (17*3 = 51)', () => {
  expect(mul1).toBe('LI')
})

//Invalid Operations
const num3 = 'XI' // 11
const num4 = 'XXI' // 21
const num5 = 'CC' // 200
const num6 = 'MMMDCCCVII' // 3807
const add2 = toRoman(toArabic(num6) + toArabic(num5)) // 3807 + 200
const sub2 = toRoman(toArabic(num3) - toArabic(num4)) // 11 - 21
const mul2 = toRoman(toArabic(num4) * toArabic(num5)) // 21 * 200

test('Should return "Error" -  number exceed limit (3807+200= 4007)', () => {
  expect(add2).toBe('Error')
})

test('Should return "Error" -  negative number (11 - 21 = -10)', () => {
  expect(sub2).toBe('Error')
})

test('Should return "Error" -  number exceed limit (3807+200= 4007)', () => {
  expect(mul2).toBe('Error')
})
