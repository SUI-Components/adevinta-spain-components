import userReadable from '../../../../components/tcf/ui/src/SecondLayer/services/secondsToUserReadable'

describe('userReadable from Seconds', () => {
  const i18n = {
    DAYS: 'days',
    HOURS: 'hours',
    MINUTES: 'minutes',
    SECONDS: 'seconds'
  }

  const ONE_MINUTE = 60
  const ONE_HOUR = 60 * 60
  const ONE_DAY = 24 * ONE_HOUR

  it('should return 15 seconds ', () => {
    const givenSeconds = 15
    const expected = '15 seconds'
    expect(userReadable({seconds: givenSeconds, i18n})).toBe(expected)
  })

  it('should return 10 hours ', () => {
    const givenSeconds = 10 * ONE_HOUR
    const expected = '10 hours'
    expect(userReadable({seconds: givenSeconds, i18n})).toBe(expected)
  })

  it('should return 1 days', () => {
    const givenSeconds = ONE_DAY
    const expected = '1 days'
    expect(userReadable({seconds: givenSeconds, i18n})).toBe(expected)
  })

  it('should return 31 days', () => {
    const givenSeconds = ONE_DAY * 31
    const expected = '31 days'
    expect(userReadable({seconds: givenSeconds, i18n})).toBe(expected)
  })
  it('should return 365 days 13 hours 23 minutes 5 seconds', () => {
    const givenSeconds = 365 * ONE_DAY + 13 * ONE_HOUR + 23 * ONE_MINUTE + 5
    const expected = '365 days 13 hours 23 minutes 5 seconds'
    expect(userReadable({seconds: givenSeconds, i18n})).toBe(expected)
  })
})
