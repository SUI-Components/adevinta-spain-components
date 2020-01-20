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
          viewBox: '0 0 64 64'
        },
        React.createElement('path', {
          d:
            'M60 62a2 2 0 0 1-1.41-.59L32 34.83 5.41 61.41a2 2 0 0 1-2.83-2.83L29.17 32 2.59 5.41a2 2 0 0 1 2.82-2.82L32 29.17 58.59 2.59a2 2 0 0 1 2.83 2.83L34.83 32l26.58 26.59A2 2 0 0 1 60 62z'
        })
      )
}

export default memo(SVGComponent)
