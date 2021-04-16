const BOTS_USER_AGENTS = [
  'googlebot',
  'google-structured-data-testing-tool',
  'bingbot',
  'linkedinbot',
  'mediapartners-google',
  'apis-google',
  'adsbot-google-mobile',
  'adsbot-google',
  'googlebot-image',
  'googlebot-news',
  'googlebot-video',
  'adsbot-google-mobile-apps',
  'debugbear'
]

export default function isBotService({userAgent}) {
  return BOTS_USER_AGENTS.some(ua => userAgent.toLowerCase().includes(ua))
}
