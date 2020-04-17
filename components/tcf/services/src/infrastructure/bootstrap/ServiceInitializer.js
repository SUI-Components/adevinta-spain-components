import {Service} from '../../application/Service'

class ServiceInitializer {
  static init() {
    return new Service()
  }
}

export {ServiceInitializer}
