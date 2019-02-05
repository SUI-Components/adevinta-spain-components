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

    componentDidMount() {
      import('intersection-observer').then(_ => {
        const target = this.refTarget
        // check we support IntersectionObserver
        if (!('IntersectionObserver' in window)) {
          this.setState({isIntersecting: true})
          return
        }
        this._observer = new window.IntersectionObserver(this.handleChange)
        this._observer.observe(target, options)
      })
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

export default hocIntersectionObserverWithOptions()
