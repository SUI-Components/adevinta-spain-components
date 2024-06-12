import {Network} from '@capacitor/network'

export const onNetworkChange = callback => Network.addListener('networkStatusChange', callback)
export const removeOnNetworkChange = () => Network.removeAllListeners()
export const getStatus = () => Network.getStatus()
