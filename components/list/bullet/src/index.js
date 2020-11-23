import PropTypes from 'prop-types'
import Bullet, {headingTags} from './bullet.js'
import cx from 'classnames'

export const responsiveTypes = {
  responsive: 'responsive',
  responsiveBlock: 'responsiveBlock'
}

const BASE_CLASS = 'sui-ListBullet'

const ListBullet = ({
  listItems,
  responsive,
  smallFont,
  isString,
  as: Heading = headingTags.h2
}) => {
  const listBulletClass = cx(BASE_CLASS, {
    [`${BASE_CLASS}--${responsive}`]: Boolean(responsive),
    [`${BASE_CLASS}--smallFont`]: smallFont
  })

  return (
    <div className={listBulletClass}>
      {listItems &&
        listItems.map((item, index) => (
          <Bullet
            {...item}
            isString={isString}
            key={index}
            baseClass={BASE_CLASS}
            as={Heading}
          />
        ))}
    </div>
  )
}

ListBullet.displayName = 'ListBullet'

ListBullet.propTypes = {
  /**
   * List of bullet items
   */
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      illustration: PropTypes.string.isRequired,
      title: PropTypes.string,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,

  /**
   * Responsive behaviour
   */
  responsive: PropTypes.oneOf(Object.values(responsiveTypes)),
  /**
   * Small font size
   */
  smallFont: PropTypes.bool,
  /**
   * Is a String insted of an image
   */
  isString: PropTypes.bool,
  /**
   * Heading TAG to improve the SEO, from h1 to h6. Default: h2
   */
  as: PropTypes.oneOf(Object.values(headingTags))
}

ListBullet.defaultProps = {
  responsive: false,
  smallFont: false
}

export {headingTags as titleListBulletTags}

export default ListBullet
