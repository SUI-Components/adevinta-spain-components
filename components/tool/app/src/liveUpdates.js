import {CapacitorUpdater} from '@capgo/capacitor-updater'

export const notifyAppReady = () => CapacitorUpdater.notifyAppReady()

export const download = async ({url, version}) => {
  return CapacitorUpdater.download({url, version})
}

export const set = async version => {
  return CapacitorUpdater.set(version)
}
