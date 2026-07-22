
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GeonodeSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await GeonodeSDK.test()
    equal(null !== testsdk, true)
  })

})
