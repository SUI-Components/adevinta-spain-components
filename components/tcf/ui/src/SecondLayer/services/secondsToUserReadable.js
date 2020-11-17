const secondsToTimeUnits = totalSeconds => {
  const result = {}
  let remaining = totalSeconds
  const divideTimeUnits = (key, divider) => {
    const wholeTimeUnit = Math.floor(remaining / divider)
    if (wholeTimeUnit) {
      result[key] = wholeTimeUnit
    }
    remaining = remaining % divider
  }
  divideTimeUnits('days', 86400)
  divideTimeUnits('hours', 3600)
  divideTimeUnits('minutes', 60)
  result.seconds = remaining
  return result
}

const userReadable = ({seconds, i18n}) => {
  if (seconds <= 0) {
    return i18n.VENDOR_PAGE.GROUPS.EXPANDED.COOKIES.NEGATIVE_OR_ZERO_MAX_AGE
  }
  const time = secondsToTimeUnits(seconds)
  let s
  s = time.days ? `${time.days} ${i18n.DAYS} ` : ''
  s += time.hours ? `${time.hours} ${i18n.HOURS} ` : ''
  s += time.minutes ? `${time.minutes} ${i18n.MINUTES} ` : ''
  s += time.seconds ? `${time.seconds} ${i18n.SECONDS}` : ''
  return s.trim()
}

export default userReadable
