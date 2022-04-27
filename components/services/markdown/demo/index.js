import ServicesMarkdown from 'components/services/markdown/src/index'

const handleOnLoad = ({html, setHtml}) => {
  console.log('markdown content loaded')
  console.log('html:', html)
  setHtml(
    '<h1>Hello World</h1><p>This content was injected after the markdown was loaded</p>'
  )
}

const markdownStyles = {
  backgroundColor: 'white',
  borderRadius: '24px',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
  margin: '24px',
  padding: '16px'
}
const MARKDOWN_URL =
  'https://raw.githubusercontent.com/SUI-Components/adevinta-spain-components/master/components/services/markdown/demo/example.md'

const DemoServicesMarkdownGroup = () => {
  return (
    <>
      <h1>
        ServiceMarkdown component loading contents from an external source
      </h1>
      <div style={markdownStyles}>
        <ServicesMarkdown src={MARKDOWN_URL} />
      </div>
      <h1>
        ServiceMarkdown component loading contents from an external source and
        overriding it when loaded
      </h1>
      <div style={markdownStyles}>
        <ServicesMarkdown src={MARKDOWN_URL} onLoad={handleOnLoad} />
      </div>
    </>
  )
}

export default DemoServicesMarkdownGroup
