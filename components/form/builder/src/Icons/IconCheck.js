import React, {memo, useEffect, useState} from 'react'

var SVGComponent = function SVGComponent(_ref) {
  var _ref$ssr = _ref.ssr
  var ssr = _ref$ssr === void 0 ? false : _ref$ssr // eslint-disable-line
  var className = _ref.className

  var _useState = useState(ssr)
  var render = _useState[0]
  var setRender = _useState[1]

  useEffect(
    function() {
      if (render === false) {
        setRender(true)
      }
    },
    [render, setRender]
  )
  return render === false
    ? null
    : React.createElement(
        'svg',
        {
          className: className,
          viewBox: '0 0 24 24'
        },
        React.createElement('path', {
          d:
            'M18.5 6c.4-.4 1-.4 1.4 0s.4 1 0 1.4L9.7 17.7c-.4.4-1 .4-1.4 0l-4.5-4.5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L9 15.6 18.5 6z'
        })
      )
}

export default memo(SVGComponent)
