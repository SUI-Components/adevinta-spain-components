import {App} from '@capacitor/app'
import {Capacitor} from '@capacitor/core'

export const isNative = () => Capacitor.isNativePlatform()
export const getApp = () => App
