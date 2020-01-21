import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export default function TableBasic({contentHead, contentBody, contentFoot}) {
  const hasHead = Boolean(contentHead?.length)
  const hasFoot = Boolean(contentFoot?.length)

  return (
    <table className="sui-TableBasic sui-TableBasic--noWrap">
      {hasHead && (
        <thead className="sui-TableBasic-header">
          <tr>
            {contentHead.map((element, index) => (
              <th key={index} className="sui-TableBasic-cell">
                {element}
              </th>
            ))}
          </tr>
        </thead>
      )}

      <tbody>
        {contentBody.map((row, index) => {
          return (
            <tr key={index}>
              {row.map((cell, index) => {
                const cellClassName = cx('sui-TableBasic-cell', {
                  'sui-TableBasic-cell--noWrap': cell.isNowrap
                })

                return cell.isHeader ? (
                  <th key={index} className={cellClassName}>
                    {cell.content}
                  </th>
                ) : (
                  <td key={index} className={cellClassName}>
                    {cell.content}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>

      {hasFoot && (
        <tfoot className="sui-TableBasic-header">
          <tr>
            {contentHead.map((element, index) => (
              <td key={index} className="sui-TableBasic-cell">
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
  contentBody: PropTypes.array.isRequired,
  contentFoot: PropTypes.array
}
