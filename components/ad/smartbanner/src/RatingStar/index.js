import React, {Component, Suspense} from 'react'
const RatingStarComponent = React.lazy(() => import('./component'))

export default class RatingStar extends Component {
  state = {isClient: false}

  componentDidMount() {
    this.setState({isClient: true})
  }

  render() {
    const {isClient} = this.state
    if (!isClient) return null

    return (
      <Suspense fallback={<div />}>
        <RatingStarComponent {...this.props} />
      </Suspense>
    )
  }
}
