import {Plugins} from '@capacitor/core'

const {LocalNotifications} = Plugins

export const prepare = async () =>
  LocalNotifications &&
  ((await LocalNotifications.checkPermissions()).display === 'granted' ||
    (await LocalNotifications.requestPermissions()).display === 'granted')

export const schedule = props => {
  if (prepare()) return LocalNotifications.schedule(props)

  return null
}

export {LocalNotifications as plugin}
