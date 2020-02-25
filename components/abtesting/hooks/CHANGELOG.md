# Change Log

All notable changes to this project will be documented in this file.

# 1.6.0 (2020-02-25)


### Features

* Use latest [@s-ui](https://github.com/s-ui) packages ([3389414](https://github.com/SUI-Components/schibsted-spain-components/commit/3389414afbfd2aeb7a9756ff45c9f00861977a8b))



# 1.5.0 (2019-11-19)


### Features

* add onActivation event param to useExperimentCore ([67ab4af](https://github.com/SUI-Components/schibsted-spain-components/commit/67ab4af4737ce0eca58bcfdce4b7f2592ae209bc))



# 1.4.0 (2019-09-19)


### Features

* change global vars for Target ([9ca0d2a](https://github.com/SUI-Components/schibsted-spain-components/commit/9ca0d2aabcfec58561e919450df705e17fd01e7d))
* handlers by experimentsID ([f0421fd](https://github.com/SUI-Components/schibsted-spain-components/commit/f0421fd95cc3c39e136bac58843464d1f98f6f78))
* import ExperimentContext from the new target package ([ca4132a](https://github.com/SUI-Components/schibsted-spain-components/commit/ca4132a4c29297a34c4c5de8af6b0734f55fae33))
* replace Optimizely by Target ([7dce3b0](https://github.com/SUI-Components/schibsted-spain-components/commit/7dce3b02e723e9362ca4064757b97a94e3d5919a))



# 1.3.0 (2019-08-05)


### Bug Fixes

* add missing destructuring for experimentData ([8d8ea4c](https://github.com/SUI-Components/schibsted-spain-components/commit/8d8ea4ced378a2fe2901ad9db4f752f4eedc3b90))


### Features

* better manage dependencies for testing ([62958a7](https://github.com/SUI-Components/schibsted-spain-components/commit/62958a7e9006f7782d8783917d01c03ba675d79a))
* move experiment core logic to a reusable hook ([c9f89e1](https://github.com/SUI-Components/schibsted-spain-components/commit/c9f89e11ed4b0f0ba0138d5adb963b760e5a4a7a))
* move experiment core tests to the hooks folder ([832fb66](https://github.com/SUI-Components/schibsted-spain-components/commit/832fb66674826d9975275c875c362e848525d3c4))
* move some never reassigned vars to const at optimizely-x.js ([b881f99](https://github.com/SUI-Components/schibsted-spain-components/commit/b881f99fc3c2a40bda6a73e8ca19fdeca65000ea))
* parse variations config to make it even simpler ([c62ee1a](https://github.com/SUI-Components/schibsted-spain-components/commit/c62ee1a9dc5aee71a7b400ac4b057605f9a5ae44))
* run useExperimentCore inside of useExperiment when receiving experimentId ([54044a2](https://github.com/SUI-Components/schibsted-spain-components/commit/54044a2a3ab99ff60f5022996ead6d56b3ccbb4b))



# 1.2.0 (2019-07-10)


### Bug Fixes

* fix experiment context by removing require ([14943b0](https://github.com/SUI-Components/schibsted-spain-components/commit/14943b07b8ca1e8f93f8c54ceb5d12c5756b4df0))



# 1.1.0 (2019-07-08)


### Bug Fixes

* fix experiment context tests by conditionally loading absolute/relative import ([7d3de76](https://github.com/SUI-Components/schibsted-spain-components/commit/7d3de76fc9f4a46d232a3704d8a00534bb021184))
* use require to avoid import errors on non-test envs ([8eb35e7](https://github.com/SUI-Components/schibsted-spain-components/commit/8eb35e78425381c4f88431248cdab64410ab4a26))


### Features

* add isDefault true to context fallback in useExperiment ([840e9d9](https://github.com/SUI-Components/schibsted-spain-components/commit/840e9d97c56cb7cc2b0165f2ae0d53d87355375d))
* create package and add useExperiment hook ([57253b9](https://github.com/SUI-Components/schibsted-spain-components/commit/57253b995bde0e631cb8c726d70dfe37bf418a15))



