const mapNumbers = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
}

export const validateNumber = roman => {
  let numRoman = roman.toUpperCase()
  const pattern = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/

  if (!pattern.test(numRoman)) {
    return 'Invalid Roman numeral'
  }
}

export const toRoman = numArabic => {
  if (numArabic > 3999 || numArabic < 1) {
    return 'Error'
  }

  let numRoman = ''

  for (let n of Object.keys(mapNumbers)) {
    while (numArabic >= mapNumbers[n]) {
      numRoman += n
      numArabic -= mapNumbers[n]
    }
  }
  return numRoman
}

export const toArabic = roman => {
  let numArabic = 0
  let numRoman = roman.toUpperCase()

  for (let n of Object.keys(mapNumbers)) {
    while (numRoman.indexOf(n) === 0) {
      numArabic += mapNumbers[n]
      numRoman = numRoman.replace(n, '')
    }
  }
  return numArabic
}
