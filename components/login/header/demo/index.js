import LoginHeader from 'components/login/header/src'
const button = {
  text: 'Help',
  props: {
    href: 'http://www.adevinta.es'
  }
}

const customButton = {
  text: 'Help',
  props: {
    design: 'outline',
    href: 'http://www.adevinta.es'
  }
}

const logo = 'https://s.ccdn.es/images/coches-net-PRO/cnet-pro-negative.svg'

export default () => {
  return (
    <>
      <h1>Login Header</h1>
      <h2>Header ith default logo</h2>
      <LoginHeader button={button} />
      <br />
      <h2>Header with custom logo</h2>
      <LoginHeader button={button} logo={logo} />
      <br />
      <h2>Header with custom button</h2>
      <LoginHeader button={customButton} />
      <h2>Header without button</h2>
      <LoginHeader />
    </>
  )
}
