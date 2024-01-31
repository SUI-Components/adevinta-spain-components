import CardArrow from '../src/index.js'

export default () => {
  const link = 'https://www.coches.net/'

  const media = {
    alt: '',
    src: 'https://s.ccdn.es/images/landing-publisher-particular@2x.jpg'
  }

  const text = {
    title: 'Publica como Particular',
    description: 'Puedes insertar hasta 2 anuncios gratis y actualizarlos tanto como tu quieras.'
  }

  const text2 = {
    title: 'Publica como Particular'
  }

  const icon = () => (
    <svg viewBox="0 0 64 64" className="sui-CardArrow-icon">
      <path d="M18,62a2,2,0,0,1-1.41-3.41L43.17,32,16.59,5.41a2,2,0,0,1,2.83-2.83L48.83,32,19.41,61.41A2,2,0,0,1,18,62Z" />
    </svg>
  )

  const suiCardArrowStyle = {
    maxWidth: '650px'
  }

  return (
    <div style={suiCardArrowStyle}>
      <CardArrow media={media} text={text} icon={icon} link={link} />
      <br />
      <CardArrow text={text} icon={icon} link={link} />
      <br />
      <CardArrow text={text2} icon={icon} link={link} />
    </div>
  )
}
