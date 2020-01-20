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
            'M16.8 9.2c.4-.4 1-.3 1.4.1.4.4.3 1-.1 1.4l-5 4.5c-.4.3-1 .3-1.3 0l-5-4.5c-.4-.4-.4-1-.1-1.4.4-.4 1-.4 1.4-.1l4.3 3.9 4.4-3.9z'
        })
      )
}

export default memo(SVGComponent)
