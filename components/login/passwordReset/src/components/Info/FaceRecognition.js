import AtomIcon, {
  ATOM_ICON_COLORS,
  ATOM_ICON_SIZES
} from '@s-ui/react-atom-icon'

import {BASE_CLASS, DEFAULT_FACE_RECOGNITION_ICON} from '../../config.js'
import useI18n from '../../hooks/useI18n.js'
const FaceRecognition = ({icons}) => {
  const i18n = useI18n()
  return (
    <div className={`${BASE_CLASS}-formFooter ${BASE_CLASS}-formFooterIcon`}>
      <AtomIcon size={ATOM_ICON_SIZES.medium}>
        {icons.faceRecognition || DEFAULT_FACE_RECOGNITION_ICON}
      </AtomIcon>
      {i18n.t('LOGIN_CROSS.LOGIN.FACE_RECOGNITION')}
    </div>
  )
}

FaceRecognition.displayName = 'FaceRecognition'

export default FaceRecognition
