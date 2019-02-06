import React, {Component} from 'react'

export const hocIntersectionObserverWithOptions = (
  options = {}
) => BaseComponent => {
  const displayName = BaseComponent.displayName

  return class WithIntersectionObserver extends Component {
    static displayName = `withIntersectionObserver(${displayName})`
    static contextTypes = BaseComponent.contextTypes

    _observer = null

    state = {
      isIntersecting: false
    }

    handleChange = ([{isIntersecting}]) => {
      if (isIntersecting) {
        this._observer.unobserve(this.refTarget)
        this.setState({isIntersecting})
      }
    }

    innerRef = elem => {
      this.refTarget = elem
    }

    _startIntersectionObserver = () => {
      const target = this.refTarget
      this._observer = new window.IntersectionObserver(this.handleChange)
      this._observer.observe(target, options)
    }

    componentDidMount() {
      if (!('IntersectionObserver' in window)) {
        import('intersection-observer').then(this._startIntersectionObserver)
      } else {
        this._startIntersectionObserver()
      }
    }

    componentWillUnmount() {
      this._observer && this._observer.unobserve(this.refTarget)
    }

    render() {
      const {isIntersecting: isVisible} = this.state
      return (
        <BaseComponent
          {...this.props}
          isVisible={isVisible}
          innerRef={this.innerRef}
        />
      )
    }
  }
}
