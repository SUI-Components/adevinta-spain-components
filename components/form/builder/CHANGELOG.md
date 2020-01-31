# Change Log

All notable changes to this project will be documented in this file.

# 1.11.0 (2020-01-31)


### Features

* remove default memos ([d5ee375](https://github.com/SUI-Components/schibsted-spain-components/commit/d5ee375b1aef2c3b4ab771cb814e585ae58712c0))



# 1.10.0 (2020-01-29)


### Bug Fixes

* use nextFields instead of __PERFORMANCE_UGLY_HACK_STATE_FIELDS__.current in reduc ([4ec5458](https://github.com/SUI-Components/schibsted-spain-components/commit/4ec54580a34b6516448bfc1c7e49462128ce8bf1))


### Features

* use nextFieldsChanged ([1e02c2e](https://github.com/SUI-Components/schibsted-spain-components/commit/1e02c2ed9b5e2da83c81c551036e2631ded0a91b))



# 1.9.0 (2020-01-29)


### Bug Fixes

* add request.withCredentials = true and remove timeout ([984f5f0](https://github.com/SUI-Components/schibsted-spain-components/commit/984f5f0bf7accfc8b86a28669419d4831c4c776b))
* initialize as arra ([d9b0b6c](https://github.com/SUI-Components/schibsted-spain-components/commit/d9b0b6c2270720ebc60c4316efc696d7bd459cf0))
* transform fields to object on onchange ([bc179b8](https://github.com/SUI-Components/schibsted-spain-components/commit/bc179b86162a73819fe9354df8ead9b2feae60b5))
* use fieldsToValidate as array instead of object ([7e791db](https://github.com/SUI-Components/schibsted-spain-components/commit/7e791dba49187e5a71f8946767e04cdac79fd224))


### Features

* add memoize in all components ([89959ca](https://github.com/SUI-Components/schibsted-spain-components/commit/89959ca705e5a9f522182f8797dc6bbf31f885ca))
* improve validations check: validate one field or validate all fields ([860b669](https://github.com/SUI-Components/schibsted-spain-components/commit/860b669babe403a604a5b809f5c67c0aad446153))
* rename reducer base case to RULES ([fd04740](https://github.com/SUI-Components/schibsted-spain-components/commit/fd047408f90d61ffa1fc31ae7f728ab501f32ef4))
* replace window[HACK_KEY] by useRef hook ([f67a62f](https://github.com/SUI-Components/schibsted-spain-components/commit/f67a62fd9907bf8afc9c7f96a6771108dd64537a))
* use input from props value ([3f02883](https://github.com/SUI-Components/schibsted-spain-components/commit/3f0288312c8425ba80282052ef19c0c7064d2a1c))


### Performance Improvements

* reuse same object to improve performance ([1dd3929](https://github.com/SUI-Components/schibsted-spain-components/commit/1dd3929b1a4e115fdd7e0ba857f3f516daf0f781))



# 1.8.0 (2020-01-29)


### Bug Fixes

* 1 ms setTimeout to avoid IE 11 error - Access is denied - XMLHttpRequest ([3ff9a34](https://github.com/SUI-Components/schibsted-spain-components/commit/3ff9a3432185708103514291ffaf6a8c88cc483f))



# 1.7.0 (2020-01-21)


### Features

* apply naming convention ([3bb7923](https://github.com/SUI-Components/schibsted-spain-components/commit/3bb792353d57a8f1802b77d3c667c9865c78b86d))
* bump version to 1.7 ([2ebeef4](https://github.com/SUI-Components/schibsted-spain-components/commit/2ebeef4971f9d4f1286fdbc572030d71416bb59d))
* first commit ([42b7d7a](https://github.com/SUI-Components/schibsted-spain-components/commit/42b7d7a5fa54cc09793782ce48013e2e9efdd968))
* from compilate code to src code ([5dceede](https://github.com/SUI-Components/schibsted-spain-components/commit/5dceede78e3468aa7b1f295421e5ce8a39a84b2b))
* move prefix from ma- to sui- ([5828804](https://github.com/SUI-Components/schibsted-spain-components/commit/5828804106f8d81efc3d9cb79fa38a900cca46a5))
* refactor errors function ([2fb952a](https://github.com/SUI-Components/schibsted-spain-components/commit/2fb952a63b0a444e4e4434095bb5c3a867436637))
* remove dependencie of ma-iconset ([c3928a8](https://github.com/SUI-Components/schibsted-spain-components/commit/c3928a8282bb2c52e8d3f09a18cfb62895e4a46b))
* remove form builder component ([1904213](https://github.com/SUI-Components/schibsted-spain-components/commit/1904213502351a8de87f37bc59ba948a92539736))



# 1.5.0 (2019-06-20)


### Features

* remove comments ([6074267](https://github.com/SUI-Components/schibsted-spain-components/commit/6074267ed5a4fbbc59575fd6fa3216774716932e))
* update formbuilder show error management ([abb7770](https://github.com/SUI-Components/schibsted-spain-components/commit/abb7770b0d65f07a7fdcf3d89176b0171169b1db))



# 1.4.0 (2019-06-19)


### Features

* fix submit definition ([254ca1b](https://github.com/SUI-Components/schibsted-spain-components/commit/254ca1bff43f46140ee07797e5d0ee9d69bb9642))



# 1.3.0 (2019-06-18)


### Features

* error control ([3c0a1f9](https://github.com/SUI-Components/schibsted-spain-components/commit/3c0a1f906ba7dc91aaa31b596987e0838fa17c89))
* fix isSubmitted definition ([e534aab](https://github.com/SUI-Components/schibsted-spain-components/commit/e534aab0bccc16efb2cff2b9b53eab5056f80cf2))
* fix readme ([3646284](https://github.com/SUI-Components/schibsted-spain-components/commit/3646284f81e382ad5416cdac56ecd07c694c6279))
* refactor submit action ([69dfbc6](https://github.com/SUI-Components/schibsted-spain-components/commit/69dfbc6b3d19cf3b6a1262d7f4cd4bd163e69d27))



# 1.2.0 (2019-06-13)


### Features

* add withValidatorHoc to manage the error state of the formFields ([69f1e02](https://github.com/SUI-Components/schibsted-spain-components/commit/69f1e026a543ed2f00d568bced2b01843b0fda8f))
* fix descriptions ([37ac5dd](https://github.com/SUI-Components/schibsted-spain-components/commit/37ac5dd2ada4d81b0679011dbe38221bc256f65c))
* pR suggestions ([6f36140](https://github.com/SUI-Components/schibsted-spain-components/commit/6f36140a1daebe247038e486b232527040913412))



# 1.1.0 (2019-05-22)


### Features

* add builder components ([835b8a8](https://github.com/SUI-Components/schibsted-spain-components/commit/835b8a836832afe3c1dc4cc526960169432ec2fb))
* added demo ([2202fac](https://github.com/SUI-Components/schibsted-spain-components/commit/2202fac25f2b7a7ba21511237094ddb9ac094702))
* fix PR suggestions ([a6599b9](https://github.com/SUI-Components/schibsted-spain-components/commit/a6599b98369e3968960e0eb6a6c26e7ac5b37286))
* fix propTypes description ([40082d5](https://github.com/SUI-Components/schibsted-spain-components/commit/40082d5a123d3deaf4c8072ee83612a2e4483f52))
* fix readme ([81471d6](https://github.com/SUI-Components/schibsted-spain-components/commit/81471d6937030181b34b40357cb5a26b612584e6))
* fix readme ([49375d0](https://github.com/SUI-Components/schibsted-spain-components/commit/49375d0c16c3f514804328fbc5c624507b907ea2))
* fix style ([c7d44a6](https://github.com/SUI-Components/schibsted-spain-components/commit/c7d44a6654a691da5caac5135e0ff560630a20fd))
* fix style variable ([7922be6](https://github.com/SUI-Components/schibsted-spain-components/commit/7922be67829aaafbaaf313cc40e2e9268c330438))
* init component ([8e59d4e](https://github.com/SUI-Components/schibsted-spain-components/commit/8e59d4e2b25934c2f9325b9017a14aab98cb06c3))
* update comments ([fc355a1](https://github.com/SUI-Components/schibsted-spain-components/commit/fc355a1f411432f4dc2f5163555f8955617154ff))



