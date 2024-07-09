import {Browser} from '@capacitor/browser'

export const close = () => Browser.close()
export const open = config => Browser.open(config)
export const addListener = (eventName, listener) => Browser.addListener(eventName, listener)
export const removeAllListeners = () => Browser.removeAllListeners()
