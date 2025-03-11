import {PushNotifications} from '@capacitor/push-notifications'

const NO_OP = () => {}

export const addPushNotificastionListeners = async ({
  registrationCallback = NO_OP,
  registrationErrorCallback = NO_OP,
  pushNotificationReceivedCallback = NO_OP,
  pushNotificationActionPerformedCallback = NO_OP,
  debug = false
}) => {
  await PushNotifications.addListener('registration', token => {
    if (debug) console.info('Registration token: ', token.value)

    registrationCallback(token.value)
  })

  await PushNotifications.addListener('registrationError', err => {
    if (debug) console.info('Registration error: ', err.error)

    registrationErrorCallback(err.error)
  })

  await PushNotifications.addListener('pushNotificationReceived', notification => {
    if (debug) console.info('Push notification received: ', JSON.stringify(notification))

    pushNotificationReceivedCallback(notification)
  })

  await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
    if (debug) console.info('Push notification action performed', notification.actionId, notification.inputValue)

    pushNotificationActionPerformedCallback(notification)
  })
}

export const registerNotifications = async ({onDenyPushNotificationsCallback = NO_OP}) => {
  let permStatus = await PushNotifications.checkPermissions()

  if (permStatus.receive === 'prompt') {
    permStatus = await PushNotifications.requestPermissions()
  }

  if (permStatus.receive !== 'granted') {
    onDenyPushNotificationsCallback()

    return
  }

  await PushNotifications.register()
}

export const getDeliveredNotifications = async () => {
  const notificationList = await PushNotifications.getDeliveredNotifications()

  return notificationList
}
