import LoginFooter from 'components/login/footer/src'

const links = [
  {title: 'Aviso legal', url: '/aviso-legal'},
  {title: 'Política de privacidad', url: '/privacidad'},
  {title: 'Política de cookies', url: '/cookies'},
  {title: 'Términos de uso del servicio', url: '/terminos-de-uso'}
]

export default () => (
  <div style={{width: '70%'}}>
    <LoginFooter links={links} />
  </div>
)
