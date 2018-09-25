import {Component} from 'react'
import PropTypes from 'prop-types'

class CmpServices extends Component {
  state = {isReady: false}

  _importAndInitializeBoros() {
    return new Promise(resolve => {
      require.ensure([], () => {
        const borosCmp = require('@schibstedspain/boros-cmp').default
        resolve(borosCmp.init())
      })
    }, 'borosCmp')
  }

  _importUseCases() {
    return new Promise(resolve => {
      require.ensure([], () => {
        const useCases = require('./useCases/index')
        resolve({useCases})
      })
    }, 'cmpDomain')
  }

  componentDidMount() {
    this._importAndInitializeBoros()
      .then(this._importUseCases)
      .then(({useCases}) => {
        this.setState({useCases, isReady: true})
      })
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
