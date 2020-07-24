const removeAllDots = string => string.replace(/\./g, '')
const replaceFirstCommaWithDot = string => string.replace(',', '.')
const removeAllCommas = string => string.replace(/,/g, '')
export const fromStringToLocaleFloat = string =>
  parseFloat(removeAllCommas(replaceFirstCommaWithDot(removeAllDots(string))))
