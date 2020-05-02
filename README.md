# egg-huaweicloud-obs

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-huaweicloud-obs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-huaweicloud-obs
[travis-image]: https://img.shields.io/travis/eggjs/egg-huaweicloud-obs.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-huaweicloud-obs
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-huaweicloud-obs.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-huaweicloud-obs?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-huaweicloud-obs.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-huaweicloud-obs
[snyk-image]: https://snyk.io/test/npm/egg-huaweicloud-obs/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-huaweicloud-obs
[download-image]: https://img.shields.io/npm/dm/egg-huaweicloud-obs.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-huaweicloud-obs

## 开启插件

```js
// config/plugin.js
exports.obs = {
  enable: true,
  package: 'egg-huaweicloud-obs'
}
```

## 使用场景

华为云官方 SDK [huaweicloud-sdk-nodejs-obs](https://github.com/huaweicloud/huaweicloud-sdk-nodejs-obs) 的简单封装。  

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
