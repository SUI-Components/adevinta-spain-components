import React, {useEffect, useState} from 'react'
import {useMount} from '@schibstedspain/sui-react-hooks'
import PropTypes from 'prop-types'

const STATUS_OK = 200
const COMPLETED = 4

function ServiceMarkdown({src}) {
  const [html, setHtml] = useState('')
  const [loaded, setLoaded] = useState(false)

  useMount(function() {
    import(/* webpackChunkName: "marked" */ 'marked').then(markedLibrary => {
      const {default: marked} = markedLibrary
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
  })

  useEffect(
    function() {
      if (loaded) {
        const id = document.location.hash.substring(1)
        if (id) {
          const element = document.getElementById(id)
          element &&
            element.scrollIntoView({block: 'start', behavior: 'smooth'})
        }
      }
    },
    [loaded]
  )

  return <div dangerouslySetInnerHTML={{__html: html}} />
}

ServiceMarkdown.displayName = 'ServiceMarkdown'

ServiceMarkdown.propTypes = {
  /**
   * The web address of the markdwon file to fetch and parse
   * For example "https://mycdn.com/myfile.md"
   */
  src: PropTypes.string.isRequired
}

export default ServiceMarkdown
