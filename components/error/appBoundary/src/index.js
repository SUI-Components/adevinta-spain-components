import React, {Component, Fragment, Suspense} from 'react'
import PropTypes from 'prop-types'

const CLOSE_ANIMATION_TIME = 1000
const MoleculeNotification = React.lazy(() =>
  import(/* webpackChunkName: "MoleculeNotification" */ '@s-ui/react-molecule-notification')
)

class ErrorAppBoundary extends Component {
  state = {errorCount: 0, hasError: false}

  componentDidCatch(errorMessage, errorStack) {
    const {errorThreshold, onError, redirectUrlOnBreakingThreshold} = this.props
    const {errorCount} = this.state

    onError({errorMessage, errorStack})
    this.setState({errorCount: errorCount + 1})

    return errorCount >= errorThreshold
      ? redirectUrlOnBreakingThreshold &&
          (window.location.href = redirectUrlOnBreakingThreshold)
      : this.setState({hasError: true})
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.errorCount <= nextProps.errorThreshold
  }

  _onCloseNotification = () => {
    setTimeout(() => this.setState({hasError: false}), CLOSE_ANIMATION_TIME)
  }

  render() {
    const {buttonLabel, children, message} = this.props

    return (
      <Fragment>
        {children}
        {this.state.hasError && (
          <div className="sui-ErrorAppBoundary-notification">
            <Suspense fallback={<div />}>
              <MoleculeNotification
                buttons={[
                  {
                    type: 'secondary',
                    negative: true,
                    children: buttonLabel,
                    onClick: this._onCloseNotification
                  }
                ]}
                onClose={this._onCloseNotification}
                type="warning"
                text={message}
                position="bottom"
              />
            </Suspense>
          </div>
        )}
      </Fragment>
    )
  }
}

ErrorAppBoundary.displayName = 'ErrorAppBoundary'
ErrorAppBoundary.propTypes = {
  /**
   * Label for the button shown on the notification
   */
  buttonLabel: PropTypes.string,
  /**
   * Wrapped childrens to control errors
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /**
   * Message to show to the user in order to inform him about the error
   */
  message: PropTypes.string,
  /**
   * In order to avoid infinite loops for errors on render, do a shortcircuit if the component
   * can't handle all the errors that are coming
   */
  errorThreshold: PropTypes.number,
  /**
   * Execute some code for each error. Useful for sending traces to some service in order to log
   * and track errors in the frontend
   */
  onError: PropTypes.func,
  /**
   * If the numberOfToleratedErrores is surpassed, then we could redirect the user to a different
   * URL in order to inform him that the web is definitely broken and unusable
   */
  redirectUrlOnBreakingThreshold: PropTypes.string
}

ErrorAppBoundary.defaultProps = {
  buttonLabel: 'OK',
  message: 'Error',
  errorThreshold: 4,
  onError: ({errorMessage, errorStack}) =>
    console.error({errorMessage, errorStack}) // eslint-disable-line
}

export default ErrorAppBoundary
