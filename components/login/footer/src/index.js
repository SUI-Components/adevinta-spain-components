import PropTypes from 'prop-types'

import Link from './components/Link.js'
import Logo from './components/Logo.js'
import {
  BASE_CLASS,
  COMPANY_LINK,
  COPYRIGHT_TEXT,
  DEFAULT_COMPANY_LOGO
} from './config.js'

const DEFAULT_LINK = Link

export default function LoginFooter({
  companyLogo = DEFAULT_COMPANY_LOGO,
  links = [],
  linkFactory: LinkFactory = DEFAULT_LINK
}) {
  const footerLinks = links.map(link => (
    <li className={`${BASE_CLASS}-listItem`}>
      <LinkFactory url={link.url}>{link.title}</LinkFactory>
    </li>
  ))

  return (
    <footer className={BASE_CLASS}>
      <a href={COMPANY_LINK} className={`${BASE_CLASS}-logo`}>
        <Logo image={companyLogo} />
      </a>
      {links.length > 0 ? (
        <ul className={`${BASE_CLASS}-list`}>{footerLinks}</ul>
      ) : null}
      <p className={`${BASE_CLASS}-text`}>{COPYRIGHT_TEXT}</p>
    </footer>
  )
}

LoginFooter.displayName = 'LoginFooter'
LoginFooter.propTypes = {
  companyLogo: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  links: PropTypes.array,
  linkFactory: PropTypes.func
}
