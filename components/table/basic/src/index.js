import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const CELL_TYPE = {
  header: 'th',
  data: 'td'
}

const TableBasic = ({contentHead, contentBody, contentFoot}) => {
  const hasHead = Boolean(contentHead?.length)
  const hasFoot = Boolean(contentFoot?.length)
  const baseClass = 'sui-TableBasic'

  return (
    <table className={`${baseClass}`}>
      {hasHead && (
        <thead>
          <tr>
            {contentHead.map((element, index) => (
              <th
                key={index}
                className={`${baseClass}-cell ${baseClass}-headerCell`}
              >
                {element}
              </th>
            ))}
          </tr>
        </thead>
      )}

      <tbody>
        {contentBody.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => {
              const {type: Element = CELL_TYPE.data} = cell
              const cellClassName = cx(`${baseClass}-cell`, {
                'sui-TableBasic-cell--noWrap': cell.isNowrap
              })

              return (
                <Element key={index} className={cellClassName}>
                  {cell.content}
                </Element>
              )
            })}
          </tr>
        ))}
      </tbody>

      {hasFoot && (
        <tfoot className={`${baseClass}-header`}>
          <tr>
            {contentHead.map((element, index) => (
              <td key={index} className={`${baseClass}-cell`}>
                {element}
              </td>
            ))}
          </tr>
        </tfoot>
      )}
    </table>
  )
}

TableBasic.displayName = 'TableBasic'

TableBasic.propTypes = {
  contentHead: PropTypes.array,
  contentBody: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string.isRequired,
        type: PropTypes.oneOf(Object.values(CELL_TYPE)),
        isNowrap: PropTypes.bool
      })
    )
  ).isRequired,
  contentFoot: PropTypes.array
}

export {CELL_TYPE as tableBasicTypes}
export default TableBasic
