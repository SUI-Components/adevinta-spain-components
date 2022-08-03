import {H1} from '@s-ui/documentation-library'

import DefaultArticle from './articles/DefaultArticle.js'
import {CLASS_DEMO_SECTION} from './config.js'

export default () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Map-Google</H1>
      <DefaultArticle className={CLASS_DEMO_SECTION} />
    </div>
  )
}
