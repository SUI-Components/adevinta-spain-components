import {STATUSES} from '@s-ui/react-molecule-progress-steps'

import {
  STAGE_PASSWORD_CHANGE,
  STAGE_PASSWORD_RESET_START
} from '../../config.js'
import useGetCurrentToken from '../useGetCurrentToken.js'
import useI18n from '../useI18n.js'
const useGetStageInfoStep = () => {
  const i18n = useI18n()
  const {getCurrentToken} = useGetCurrentToken()
  const {stage} = getCurrentToken()

  const getStageInfoData = () => {
    let data = {}

    if (stage === STAGE_PASSWORD_RESET_START) {
      data = {
        title: i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_1.TITLE'),
        message: i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_1.MESSAGE')
      }
    } else {
      data = {
        title: i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_2.TITLE'),
        message: i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_2.MESSAGE')
      }
    }

    const initialStepperState = {
      label: i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_1.LABEL'),
      status:
        stage === STAGE_PASSWORD_RESET_START
          ? STATUSES.ACTIVE
          : STATUSES.VISITED
    }

    const endStepperState = {
      label: i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_2.LABEL'),
      status:
        stage === STAGE_PASSWORD_CHANGE ? STATUSES.ACTIVE : STATUSES.NORMAL
    }

    return {
      title: data.title,
      message: data.message,
      initialStepperState,
      endStepperState
    }
  }

  return {
    getStageInfoData
  }
}

export default useGetStageInfoStep
