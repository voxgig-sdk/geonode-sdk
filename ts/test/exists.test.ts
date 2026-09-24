
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GeonodeSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = GeonodeSDK.test()
    equal(testsdk instanceof GeonodeSDK, true,
      'GeonodeSDK.test() must return a client synchronously')
  })

})
