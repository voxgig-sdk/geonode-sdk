

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { GeonodeSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ProxyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GEONODE_TEST_LIVE=TRUE.
  afterEach(liveDelay('GEONODE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GeonodeSDK.test()
    const ent = testsdk.Proxy()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GEONODE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'proxy.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"anonymityLevel","req":false,"short":"Level of anonymity provided by the proxy","type":"`$STRING`","index$":0},{"active":true,"name":"country","req":false,"short":"Country code where the proxy is located","type":"`$STRING`","index$":1},{"active":true,"name":"ip","req":false,"short":"IP address of the proxy server","type":"`$STRING`","index$":2},{"active":true,"format":"date-time","name":"lastChecked","req":false,"short":"Timestamp of last proxy check","type":"`$STRING`","index$":3},{"active":true,"name":"port","req":false,"short":"Port number of the proxy server","type":"`$STRING`","index$":4},{"active":true,"name":"protocols","req":false,"short":"Supported protocols","type":"`$ARRAY`","index$":5},{"active":true,"name":"responseTime","req":false,"short":"Average response time in milliseconds","type":"`$INTEGER`","index$":6},{"active":true,"name":"upTime","req":false,"short":"Uptime percentage","type":"`$NUMBER`","index$":7}],"name":"proxy","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":100,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /proxy-list","json":"{\"operationId\":\"getProxyList\",\"parameters\":[{\"description\":\"The page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"The number of proxy servers to return per page\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":100,\"maximum\":500,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"description\":\"Array of proxy server objects\",\"items\":{\"properties\":{\"anonymityLevel\":{\"description\":\"Level of anonymity provided by the proxy\",\"example\":\"elite\",\"type\":\"string\"},\"country\":{\"description\":\"Country code where the proxy is located\",\"example\":\"US\",\"type\":\"string\"},\"ip\":{\"description\":\"IP address of the proxy server\",\"example\":\"192.168.1.1\",\"type\":\"string\"},\"lastChecked\":{\"description\":\"Timestamp of last proxy check\",\"format\":\"date-time\",\"type\":\"string\"},\"port\":{\"description\":\"Port number of the proxy server\",\"example\":\"8080\",\"type\":\"string\"},\"protocols\":{\"description\":\"Supported protocols\",\"items\":{\"example\":\"http\",\"type\":\"string\"},\"type\":\"array\"},\"responseTime\":{\"description\":\"Average response time in milliseconds\",\"example\":150,\"type\":\"integer\"},\"upTime\":{\"description\":\"Uptime percentage\",\"example\":99.5,\"type\":\"number\"}},\"type\":\"object\"},\"type\":\"array\"},\"limit\":{\"description\":\"Number of items per page\",\"type\":\"integer\"},\"page\":{\"description\":\"Current page number\",\"type\":\"integer\"},\"total\":{\"description\":\"Total number of available proxies\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with proxy list\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Too many requests - Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/proxy-list","segments":[{"lit":"proxy-list"}],"select":{"exist":["limit","page"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"proxy","name__orig":"proxy","Name":"Proxy","name_":"proxy","name-":"proxy","NAME":"PROXY","index$":0}, {"active":true,"entity":"proxy","key$":"BasicProxyFlow","kind":"basic","name":"BasicProxyFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"proxy_ref01"}}],"index$":0}]}, 'Proxy')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let proxy_ref01_data = Object.values(setup.data.existing.proxy)[0] as any

    // LIST
    const proxy_ref01_ent = client.Proxy()
    const proxy_ref01_match: any = {}

    const proxy_ref01_list = (await proxy_ref01_ent.list(proxy_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/proxy/ProxyTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = GeonodeSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['proxy01','proxy02','proxy03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GEONODE_TEST_PROXY_ENTID': idmap,
    'GEONODE_TEST_LIVE': 'FALSE',
    'GEONODE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GEONODE_TEST_PROXY_ENTID']

  const live = 'TRUE' === env.GEONODE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GEONODE_TEST_PROXY_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new GeonodeSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.GEONODE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
