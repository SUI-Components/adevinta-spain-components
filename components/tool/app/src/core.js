import {App} from '@capacitor/app'
import {Capacitor, CapacitorCookies, CapacitorHttp} from '@capacitor/core'

export const getApp = () => App
export const getHttp = () => CapacitorHttp
export const getPlatform = () => Capacitor.getPlatform()
export const isAndroid = () => Capacitor.getPlatform() === 'android'
export const isIos = () => Capacitor.getPlatform() === 'ios'
export const isNative = () => Capacitor.isNativePlatform()
export const isWeb = () => Capacitor.getPlatform() === 'web'
export const setCookie = async props => CapacitorCookies.setCookie(props)
