'use strict';

const mock = require('egg-mock');

describe('test/huaweicloud-obs.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/huaweicloud-obs-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, huaweicloudObs')
      .expect(200);
  });
});
