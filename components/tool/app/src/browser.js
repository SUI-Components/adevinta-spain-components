import {Browser} from '@capacitor/browser'

export const close = () => Browser.close()
export const open = config => Browser.open(config)
