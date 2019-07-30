import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class LazyContent extends Component {
  constructor(props) {
    super(props)
    this.refTarget = React.createRef()
  }

  _observer = null

  state = {
    isIntersecting: false
  }

  handleChange = ([{isIntersecting}]) => {
    if (isIntersecting) {
      this.unobserve()
      this._observer = null
      this.setState({isIntersecting})
    }
  }

  unobserve = () => {
    try {
      this._observer.unobserve(this.refTarget.current)
    } catch (e) {
      console.warn(e)
    }
  }

  _startIntersectionObserver = () => {
    this._observer = new window.IntersectionObserver(this.handleChange)
    try {
      this._observer.observe(this.refTarget.current, {
        rootMargin: this.props.rootMargin
      })
    } catch (e) {
      console.warn(e)
    }
  }

  componentDidMount() {
    if (!('IntersectionObserver' in window)) {
      import('intersection-observer').then(this._startIntersectionObserver)
    } else {
      this._startIntersectionObserver()
    }
  }

  componentWillUnmount() {
    this._observer && this.unobserve()
  }

  render() {
    const {isIntersecting: isVisible} = this.state
    const {children, placeholder, height} = this.props

    if (isVisible) {
      return children
    } else if (placeholder) {
      return <div ref={this.refTarget}>{placeholder}</div>
    } else {
      return <div ref={this.refTarget} style={{height: `${height}px`}} />
    }
  }
}

LazyContent.defaultProps = {
  rootMargin: '100px 0 0'
}

LazyContent.propTypes = {
  /**
   * Wrapped content that will be rendered, or not, depending your userAgent and if is interescting. As explained in the README.md
   */
  children: PropTypes.any,

  /**
   * Number that determines the height of the component that we're waiting in pixels.
   */
  height: PropTypes.number,

  /**
   * A component or html element that is used as a placeholder
   */
  placeholder: PropTypes.element,

  /**
   * String in the format of the css margin property. the values serves to grow or shrink
   * each side of the root element's bounding box before computing intersections.
   */
  rootMargin: PropTypes.string
}
