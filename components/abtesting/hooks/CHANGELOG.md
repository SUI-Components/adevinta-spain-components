# Change Log

All notable changes to this project will be documented in this file.

<a name="1.5.0"></a>
# 1.5.0 (2019-11-19)


### Features

* add onActivation event param to useExperimentCore ([67ab4af](https://github.com/SUI-Components/schibsted-spain-components/commit/67ab4af))



<a name="1.4.0"></a>
# 1.4.0 (2019-09-19)


### Features

* change global vars for Target ([9ca0d2a](https://github.com/SUI-Components/schibsted-spain-components/commit/9ca0d2a))
* handlers by experimentsID ([f0421fd](https://github.com/SUI-Components/schibsted-spain-components/commit/f0421fd))
* import ExperimentContext from the new target package ([ca4132a](https://github.com/SUI-Components/schibsted-spain-components/commit/ca4132a))
* replace Optimizely by Target ([7dce3b0](https://github.com/SUI-Components/schibsted-spain-components/commit/7dce3b0))



<a name="1.3.0"></a>
# 1.3.0 (2019-08-05)


### Bug Fixes

* add missing destructuring for experimentData ([8d8ea4c](https://github.com/SUI-Components/schibsted-spain-components/commit/8d8ea4c))


### Features

* better manage dependencies for testing ([62958a7](https://github.com/SUI-Components/schibsted-spain-components/commit/62958a7))
* move experiment core logic to a reusable hook ([c9f89e1](https://github.com/SUI-Components/schibsted-spain-components/commit/c9f89e1))
* move experiment core tests to the hooks folder ([832fb66](https://github.com/SUI-Components/schibsted-spain-components/commit/832fb66))
* move some never reassigned vars to const at optimizely-x.js ([b881f99](https://github.com/SUI-Components/schibsted-spain-components/commit/b881f99))
* parse variations config to make it even simpler ([c62ee1a](https://github.com/SUI-Components/schibsted-spain-components/commit/c62ee1a))
* run useExperimentCore inside of useExperiment when receiving experimentId ([54044a2](https://github.com/SUI-Components/schibsted-spain-components/commit/54044a2))



<a name="1.2.0"></a>
# 1.2.0 (2019-07-10)


### Bug Fixes

* fix experiment context by removing require ([14943b0](https://github.com/SUI-Components/schibsted-spain-components/commit/14943b0))



<a name="1.1.0"></a>
# 1.1.0 (2019-07-08)


### Bug Fixes

* fix experiment context tests by conditionally loading absolute/relative import ([7d3de76](https://github.com/SUI-Components/schibsted-spain-components/commit/7d3de76))
* use require to avoid import errors on non-test envs ([8eb35e7](https://github.com/SUI-Components/schibsted-spain-components/commit/8eb35e7))


### Features

* add isDefault true to context fallback in useExperiment ([840e9d9](https://github.com/SUI-Components/schibsted-spain-components/commit/840e9d9))
* create package and add useExperiment hook ([57253b9](https://github.com/SUI-Components/schibsted-spain-components/commit/57253b9))



