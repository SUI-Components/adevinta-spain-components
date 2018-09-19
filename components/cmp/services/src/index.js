import {Component} from 'react'
import PropTypes from 'prop-types'

class CmpServices extends Component {
  state = {isReady: false}
  componentDidMount() {
    require.ensure(
      [],
      require => {
        const useCases = require('./useCases/index')
        this.setState({useCases, isReady: true})
      },
      'cmpDomain'
    )
  }

  render() {
    if (this.state.isReady === false) return null

    return this.props.children(this.state.useCases)
  }
}

CmpServices.displayName = 'CmpServices'
CmpServices.propTypes = {
  /**
   * Render prop. It will receive as parameter an object with all the services you can use. The function has to return the element you want to render
   */
  children: PropTypes.func.isRequired
}

export default CmpServices
