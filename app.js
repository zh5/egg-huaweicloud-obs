const assert = require('assert')
const ObsClient = require('./lib/obs')

class Obs {
  constructor(config) {
    this.config = config
    this.obs = new ObsClient(config)
  }

  putObject({ key, file, stream }) {
    return new Promise((resolve, reject) => {
      let objectOption = {
        Bucket: this.config.bucket,
        Key : key,
      }
      if (file) {
        objectOption.SourceFile = file
      } else {
        objectOption.Body = stream
      }
      this.obs.putObject(objectOption, (err, result) => {
        if (err) {
          reject(err)
          return
        }
        resolve({
          url: this.config.domain + '/' + key,
          msg: result
        })
      })
    })
  }
}

module.exports = app => {
  assert(app.config.obs.access_key_id, '[egg-huaweicloud-obs] Must set `access_key_id` or in obs\'s config')
  assert(app.config.obs.secret_access_key, '[egg-huaweicloud-obs] Must set `secret_access_key` or in obs\'s config')
  assert(app.config.obs.server, '[egg-huaweicloud-obs] Must set `server` or in obs\'s config')
  assert(app.config.obs.bucket, '[egg-huaweicloud-obs] Must set `bucket` or in obs\'s config')
  assert(app.config.obs.domain, '[egg-huaweicloud-obs] Must set `domain` or in obs\'s config')
  app.obs = new Obs(app.config.obs)
}