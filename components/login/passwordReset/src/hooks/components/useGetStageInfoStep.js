import {STATUSES} from '@s-ui/react-molecule-progress-steps'

import {STAGE_PASSWORD_RESET_START} from '../../config.js'
import useGetCurrentToken from '../useGetCurrentToken.js'
import useI18n from '../useI18n.js'
const useGetStageInfoStep = () => {
  const i18n = useI18n()
  const {getCurrentToken} = useGetCurrentToken()
  const {stage} = getCurrentToken()

  const defaultStageInfoData = {
    title: i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_1.TITLE'),
    message: i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_1.MESSAGE'),
    initialStepperState: {
      label: i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_1.LABEL'),
      status: STATUSES.ACTIVE
    },
    endStepperState: {
      label: i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_2.LABEL'),
      status: STATUSES.NORMAL
    }
  }

  const getStageInfoData = () => {
    if (stage === STAGE_PASSWORD_RESET_START) {
      return defaultStageInfoData
    }

    return {
      ...defaultStageInfoData,
      title: i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_2.TITLE'),
      message: i18n.t('LOGIN_CROSS.PASSWORD_RESET.STEP_2.MESSAGE'),
      initialStepperState: {
        ...defaultStageInfoData.initialStepperState,
        status: STATUSES.VISITED
      },
      endStepperState: {
        ...defaultStageInfoData.endStepperState,
        status: STATUSES.ACTIVE
      }
    }
  }

  return {
    getStageInfoData
  }
}

export default useGetStageInfoStep
