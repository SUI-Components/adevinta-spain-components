import PropTypes from 'prop-types'
import React from 'react'

const Bullet = ({
  illustration,
  title,
  text,
  baseClass: BASE_CLASS,
  isString
}) => {
  const ITEM_CLASS = `${BASE_CLASS}-item`
  const ILLUSTRATION_CLASS = `${BASE_CLASS}-illustration`
  const ILLUSTRATION_STRING_CLASS = `${BASE_CLASS}-illustrationString`
  const INNER_CLASS = `${BASE_CLASS}-inner`
  const TITLE_CLASS = `${BASE_CLASS}-title`
  const TEXT_CLASS = `${BASE_CLASS}-text`

  return (
    <div className={ITEM_CLASS}>
      {isString && (
        <h2 className={ILLUSTRATION_STRING_CLASS}>{illustration}</h2>
      )}
      {!isString && <img className={ILLUSTRATION_CLASS} src={illustration} />}
      <div className={INNER_CLASS}>
        {title && <h3 className={TITLE_CLASS}>{title}</h3>}
        <p className={TEXT_CLASS}>{text}</p>
      </div>
    </div>
  )
}

Bullet.displayName = 'Bullet'

Bullet.propTypes = {
  illustration: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  baseClass: PropTypes.string.isRequired,
  isString: PropTypes.bool
}

export default Bullet
