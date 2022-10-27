# CHANGELOG

# 1.21.0 (2022-10-27)


### Bug Fixes

* **components/abtesting/optimizelyXExperiment:** remove unused script ([022aa14](https://github.com/SUI-Components/adevinta-spain-components/commit/022aa145150dbf6b6e5dc85063c8d2327d22c42e))



# 1.20.0 (2020-11-24)


### Features

* **abtesting/optimizelyXExperiment:** Use new jsx runtime ([91538a7](https://github.com/SUI-Components/adevinta-spain-components/commit/91538a7cb97461a108708b8e72766dd6f36c5116))



# 1.19.0 (2020-05-21)


### Features

* **abtesting/optimizelyXExperiment:** add unique contexts by experiment name ([a557872](https://github.com/SUI-Components/adevinta-spain-components/commit/a557872beeb031997100b6e0ff1e5c0818ccf417))



# 1.18.0 (2020-03-20)


### Features

* **abtesting/optimizelyXExperiment:** add EmptyVariation component ([25f3fea](https://github.com/SUI-Components/adevinta-spain-components/commit/25f3fea4d6b74f7c9b4c6f6df118dbd5fe37eff8))
* **abtesting/optimizelyXExperiment:** avoid need to render something ([448e039](https://github.com/SUI-Components/adevinta-spain-components/commit/448e039064f22ebd11be050e97cedb4619423827))



# 1.17.0 (2019-11-04)


### Features

* **abtesting/optimizelyXExperiment:** upgrade s-ui/js dependency ([5f74f52](https://github.com/SUI-Components/adevinta-spain-components/commit/5f74f52b0faba7079dee99520e3dd81afbb4c5ea))



# 1.16.0 (2019-08-05)


### Bug Fixes

* **abtesting/optimizelyXExperiment:** add extra check in ExperimentProviderAndCore's optional deps p ([417fa56](https://github.com/SUI-Components/adevinta-spain-components/commit/417fa56273e3e423f80e21d6ed607454f9cc8b0f))


### Features

* **abtesting/hooks:** better manage dependencies for testing ([62958a7](https://github.com/SUI-Components/adevinta-spain-components/commit/62958a7e9006f7782d8783917d01c03ba675d79a))
* **abtesting/hooks:** move experiment core logic to a reusable hook ([c9f89e1](https://github.com/SUI-Components/adevinta-spain-components/commit/c9f89e11ed4b0f0ba0138d5adb963b760e5a4a7a))
* **abtesting/hooks:** move experiment core tests to the hooks folder ([832fb66](https://github.com/SUI-Components/adevinta-spain-components/commit/832fb66674826d9975275c875c362e848525d3c4))
* **abtesting/optimizelyXExperiment:** accept experimentData prop to act just as a provider ([6226682](https://github.com/SUI-Components/adevinta-spain-components/commit/62266826dceb772f7976ee5d427a9b46dc43f60d))
* **abtesting/optimizelyXExperiment:** better organize component file structure ([68cefdb](https://github.com/SUI-Components/adevinta-spain-components/commit/68cefdbcb1e20120bda28f226da6fe1778d2b988))
* **abtesting/optimizelyXExperiment:** move props mapper logic to its own file ([5bba3af](https://github.com/SUI-Components/adevinta-spain-components/commit/5bba3afa14a16ee31fc3461b61a71c591edf14d0))
* **abtesting/optimizelyXExperiment:** move to functional component and adapt tests ([883c64a](https://github.com/SUI-Components/adevinta-spain-components/commit/883c64a991ddb8ae2afc34eb9f2bd2799007ebbd))
* **abtesting/optimizelyXExperiment:** replace experimentData prop name in favor of feed ([abb2be9](https://github.com/SUI-Components/adevinta-spain-components/commit/abb2be9f2c69a909179997c53f316d70383fa1ce))



# 1.15.0 (2019-07-23)


### Features

* **abtesting/optimizelyXExperiment:** add forceActivation and forceActivationDelay props ([22ad4c8](https://github.com/SUI-Components/adevinta-spain-components/commit/22ad4c80f2938298a370fd249cd7ea45a6139f77))



# 1.14.0 (2019-07-08)


### Bug Fixes

* **abtesting/optimizelyXExperiment:** add method to parse raw variationId from optimizely to a numbe ([04981fb](https://github.com/SUI-Components/adevinta-spain-components/commit/04981fb18ed182943e57b71d7d16493c13e909e7))



# 1.13.0 (2019-07-05)


### Features

* **abtesting/optimizelyXExperiment:** add ability to specify a variation name to forceVariation pro ([9932262](https://github.com/SUI-Components/adevinta-spain-components/commit/99322626e8448154aced5f3337f0f8e1231e7dac))
* **abtesting/optimizelyXExperiment:** add boolean variation flags to experiment context ([092dc37](https://github.com/SUI-Components/adevinta-spain-components/commit/092dc377d28d57a9c8fc7c9936eb9e85b40ee398))
* **abtesting/optimizelyXExperiment:** add camel case ensuring process for variation flags ([58a6774](https://github.com/SUI-Components/adevinta-spain-components/commit/58a67741f1be2d2a763e9241ef5fc3c1094a0b73))
* **abtesting/optimizelyXExperiment:** add environment condition so forceVariation doesn't work in p ([a5ade7b](https://github.com/SUI-Components/adevinta-spain-components/commit/a5ade7baf63e1ea09bf68460c06f7dcf8760ed11))
* **abtesting/optimizelyXExperiment:** add experiment context, forceVariation and variationName prop ([4fec2b7](https://github.com/SUI-Components/adevinta-spain-components/commit/4fec2b7a6a790a2f8f40c59fa8c786786e568f9b))
* **abtesting/optimizelyXExperiment:** add forceVariation prop warning message ([f3a211a](https://github.com/SUI-Components/adevinta-spain-components/commit/f3a211a3377abf38be0be8f9dea120924dbaeb73))
* **abtesting/optimizelyXExperiment:** exclude special children prop form experiment context ([fddca02](https://github.com/SUI-Components/adevinta-spain-components/commit/fddca027270683e087843b216a1163035600ce4a))
* **abtesting/optimizelyXExperiment:** gather state logic in a single method to stay dry ([0882ede](https://github.com/SUI-Components/adevinta-spain-components/commit/0882ede29d8e59f90b42d49a1f82cfbffb4edd58))
* **abtesting/optimizelyXExperiment:** move some methods to arrow functions ([f46f55b](https://github.com/SUI-Components/adevinta-spain-components/commit/f46f55bdfa07924d614f83fd79d5024b5d9adff5))
* **abtesting/optimizelyXExperiment:** order state vars ([8ae9332](https://github.com/SUI-Components/adevinta-spain-components/commit/8ae93321aa707325249a296fcdc3ea28af220c8b))



# 1.12.0 (2019-06-03)


### Features

* **abtesting/optimizelyXExperiment:** add trigger when a variant is selected ([74ebf4b](https://github.com/SUI-Components/adevinta-spain-components/commit/74ebf4b583128d42c6b233b31eb046bdc1d53cb8))
* **abtesting/optimizelyXExperiment:** integrate Hotjar with Optimizely to allow record AB test by f ([fb2eca3](https://github.com/SUI-Components/adevinta-spain-components/commit/fb2eca3a294479a2253d1dbc7e584b8ca2e350f1))



# 1.11.0 (2019-04-02)


### Features

* **abtesting/optimizelyXExperiment:** Add .npmignore ([84d941b](https://github.com/SUI-Components/adevinta-spain-components/commit/84d941b2e1656f688e68192bb896e20657e47775))
* **abtesting/optimizelyXExperiment:** Remove .npmignore ([0a59452](https://github.com/SUI-Components/adevinta-spain-components/commit/0a59452ff845ced2ea89bc3ee86f6b9677011a4e))



# 1.10.0 (2019-02-25)


### Bug Fixes

* **abtesting/optimizelyXExperiment:** fix small issue ([909f111](https://github.com/SUI-Components/adevinta-spain-components/commit/909f11173d168a05f5145f351a96469898cef26d))



# 1.9.0 (2018-09-07)


### Features

* **abtesting/optimizelyXExperiment:** add methods to listen to experiments activation ([5562334](https://github.com/SUI-Components/adevinta-spain-components/commit/5562334a2045cb008922c0a79652ee65650de1c8))
* **abtesting/optimizelyXExperiment:** make component to wait for experiment to activate manually ([49adb82](https://github.com/SUI-Components/adevinta-spain-components/commit/49adb82b30ce7a70dfd4249ada653f6de7da401d))



# 1.8.0 (2018-06-27)


### Bug Fixes

* **abtesting/optimizelyXExperiment:** fix: wait for sdk of optimizely to be loaded. ([60abe3c](https://github.com/SUI-Components/adevinta-spain-components/commit/60abe3c1236a2f7681662a4ffc6b4bade8a4b03a))
* **META:** mAke tests work with react 15 ([54af133](https://github.com/SUI-Components/adevinta-spain-components/commit/54af133a139707e84394dd0ee4062db6a84bafef))



# 1.7.0 (2017-11-06)


### Bug Fixes

* **META:** adapt tests to enzyme@3 ([f26d098](https://github.com/SUI-Components/adevinta-spain-components/commit/f26d0981a55ce34e1c97a88af88a0ddefd2e7c2e))


### Features

* **abtesting/optimizelyXExperiment:** Bump version ([bcfe637](https://github.com/SUI-Components/adevinta-spain-components/commit/bcfe63724161d974b40ed79384495201cf13cdd0))
* **abtesting/optimizelyXExperiment:** Migrate to PropTypes package ([d69afa9](https://github.com/SUI-Components/adevinta-spain-components/commit/d69afa9c42ed5153999ff86e5c3a3b7b000dc2f7))



# 1.5.0 (2017-07-26)


### Features

* **abtesting/optimizelyXExperiment:** make component work when optmizely is loaded async ([d26ab36](https://github.com/SUI-Components/adevinta-spain-components/commit/d26ab36f64caaf8e541ff76d2410316ba9f84f58))



# 1.4.0 (2017-07-19)


### Features

* **abtesting/optimizelyXExperiment:** migrate from old repo ([5bcbae7](https://github.com/SUI-Components/adevinta-spain-components/commit/5bcbae7ced7f12571305313e25a8e106941833fd))
* **abtesting/optimizelyXExperiment:** move to [@s-ui](https://github.com/s-ui) npm scope ([be38e5c](https://github.com/SUI-Components/adevinta-spain-components/commit/be38e5c43996a76c244eab5380dbf0943d9d3a29))



