import {App} from '@capacitor/app'
import {Capacitor, CapacitorHttp} from '@capacitor/core'

export const isNative = () => Capacitor.isNativePlatform()
export const getApp = () => App
export const getHttp = () => CapacitorHttp
