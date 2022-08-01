import {stats} from '@s-ui/js/lib/ua-parser'
const browser = stats(window.navigator.userAgent)

export default () => ({
  default: {
    browser
  },
  mobile: {
    browser: {isDesktop: false, isMobile: true, isTablet: false}
  },
  tablet: {
    browser: {isDesktop: false, isMobile: false, isTablet: false}
  },
  desktop: {
    browser: {isDesktop: true, isMobile: false, isTablet: false}
  }
})
