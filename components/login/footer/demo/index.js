import LoginFooter from 'components/login/footer/src'

const links = [
  {title: 'Link 1', url: '/url-link-1'},
  {title: 'Link 2', url: '/url-link-2'},
  {title: 'Link 3', url: '/url-link-3'},
  {title: 'Link 4', url: '/url-link-4'}
]

export default () => (
  <div style={{width: '70%'}}>
    <LoginFooter links={links} />
  </div>
)
