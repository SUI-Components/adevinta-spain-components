import React from 'react'

import ModalGallery from '../src/index.js'

const images = [
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1553931.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1553930.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1553927.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1553929.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1553919.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1553920.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1553921.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1553922.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1553923.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1553924.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1553925.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1553926.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1553928.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1884036.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1884037.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1884038.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1884039.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1884040.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1884041.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1884042.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1884043.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1884044.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1884045.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1884046.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1884047.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1884048.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1884049.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1884050.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1884051.jpg/1920x1080/a_fill'
  },
  {
    src: 'https://d.fotocasa.es/promotion/2016/08/31/19241275/1884052.jpg/1920x1080/a_fill'
  }
]

class FullscreenModalGallery extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isOpen: false
    }
  }

  _open() {
    this.setState({isOpen: true})
  }

  _close() {
    alert('Closing modal gallery...')
    this.setState({isOpen: false})
  }

  render() {
    return (
      <div>
        <button onClick={() => this._open()}>Open Modal Gallery!</button>
        <ModalGallery open={this.state.isOpen} multimedia={{images}} initialSlide={11} onClose={() => this._close()} />
      </div>
    )
  }
}

export default () => <FullscreenModalGallery />
