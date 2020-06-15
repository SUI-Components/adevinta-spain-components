import PropTypes from 'prop-types'
import React from 'react'

const HEADING_TAGS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
}

const Bullet = ({
  illustration,
  title,
  text,
  baseClass: BASE_CLASS,
  isString,
  as: Heading
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
        <Heading className={ILLUSTRATION_STRING_CLASS}>{illustration}</Heading>
      )}
      {!isString && <img className={ILLUSTRATION_CLASS} src={illustration} />}
      <div className={INNER_CLASS}>
        {title && <Heading className={TITLE_CLASS}>{title}</Heading>}
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
  isString: PropTypes.bool,
  as: PropTypes.oneOf(Object.values(HEADING_TAGS))
}

export {HEADING_TAGS as headingTags}
export default Bullet
