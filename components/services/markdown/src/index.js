import {useEffect, useState} from 'react'

import PropTypes from 'prop-types'

const STATUS_OK = 200
const COMPLETED = 4

function ServiceMarkdown({onLoad = () => {}, src}) {
  const [html, setHtml] = useState('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    import(/* webpackChunkName: "marked" */ 'marked').then(markedLibrary => {
      const {marked} = markedLibrary
      const req = new window.XMLHttpRequest()
      req.open('GET', src, true)
      req.onload = () => {
        if (req.readyState === COMPLETED && req.status === STATUS_OK) {
          setHtml(marked(req.responseText))
          setLoaded(true)
        }
      }
      req.send(null)
    })
  }, [src])

  useEffect(
    () => {
      if (loaded) {
        onLoad({html, setHtml})
        const id = document.location.hash.substring(1)
        if (id) {
          const element = document.getElementById(id)
          element &&
            element.scrollIntoView({block: 'start', behavior: 'smooth'})
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loaded, onLoad]
  )

  return <div dangerouslySetInnerHTML={{__html: html}} />
}

ServiceMarkdown.displayName = 'ServiceMarkdown'

ServiceMarkdown.propTypes = {
  /**
   * A simple function to be called when the markdown is loaded.
   * @type {function}
   * @returns {object} Object containing html value and setHtml function.
   *
   */
  onLoad: PropTypes.func,
  /**
   * The web address of the markdown file to fetch and parse
   * For example "https://mycdn.com/myfile.md"
   */
  src: PropTypes.string.isRequired
}

export default ServiceMarkdown
