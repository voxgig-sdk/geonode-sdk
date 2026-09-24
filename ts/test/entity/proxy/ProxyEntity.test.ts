

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"anonymityLevel":{"a":true,"h":"Anonymity Level","n":"anonymityLevel","r":false,"sh":"Level of anonymity provided by the proxy","t":"`$STRING`","key$":"anonymityLevel","index$":0},"country":{"a":true,"h":"Country","n":"country","r":false,"sh":"Country code where the proxy is located","t":"`$STRING`","key$":"country","index$":1},"ip":{"a":true,"h":"Ip","n":"ip","r":false,"sh":"IP address of the proxy server","t":"`$STRING`","key$":"ip","index$":2},"lastChecked":{"a":true,"fo":"date-time","h":"Last Checked","n":"lastChecked","r":false,"sh":"Timestamp of last proxy check","t":"`$STRING`","key$":"lastChecked","index$":3},"port":{"a":true,"h":"Port","n":"port","r":false,"sh":"Port number of the proxy server","t":"`$STRING`","key$":"port","index$":4},"protocols":{"a":true,"h":"Protocols","n":"protocols","r":false,"sh":"Supported protocols","t":"`$ARRAY`","key$":"protocols","index$":5},"responseTime":{"a":true,"h":"Response Time","n":"responseTime","r":false,"sh":"Average response time in milliseconds","t":"`$INTEGER`","key$":"responseTime","index$":6},"upTime":{"a":true,"h":"Up Time","n":"upTime","r":false,"sh":"Uptime percentage","t":"`$NUMBER`","key$":"upTime","index$":7}},"name":"proxy","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /proxy-list","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":100,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/proxy-list","q":{"exist":["limit","page"]},"r":{},"s":[{"lit":"proxy-list"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"proxy","name__orig":"proxy","Name":"Proxy","name_":"proxy","name-":"proxy","NAME":"PROXY","index$":0}, {"active":true,"entity":"proxy","key$":"BasicProxyFlow","kind":"basic","name":"BasicProxyFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"proxy_ref01"}}],"index$":0}]}, 'Proxy', {"GET /proxy-list":{"protocol":"http","operationId":"getProxyList","responses":{"200":{"description":"Successful response with proxy list","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"description":"Array of proxy server objects","items":{"properties":{"anonymityLevel":{"description":"Level of anonymity provided by the proxy","example":"elite","type":"string","key$":"anonymityLevel"},"country":{"description":"Country code where the proxy is located","example":"US","type":"string","key$":"country"},"ip":{"description":"IP address of the proxy server","example":"192.168.1.1","type":"string","key$":"ip"},"lastChecked":{"description":"Timestamp of last proxy check","format":"date-time","type":"string","key$":"lastChecked"},"port":{"description":"Port number of the proxy server","example":"8080","type":"string","key$":"port"},"protocols":{"description":"Supported protocols","items":{"example":"http","type":"string"},"type":"array","key$":"protocols"},"responseTime":{"description":"Average response time in milliseconds","example":150,"type":"integer","key$":"responseTime"},"upTime":{"description":"Uptime percentage","example":99.5,"type":"number","key$":"upTime"}},"type":"object","index$":0},"key$":"data","type":"array"},"total":{"description":"Total number of available proxies","key$":"total","type":"integer"},"page":{"description":"Current page number","key$":"page","type":"integer"},"limit":{"description":"Number of items per page","key$":"limit","type":"integer"}}}}}},"400":{"description":"Bad request - Invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}}}}}},"429":{"description":"Too many requests - Rate limit exceeded","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}}}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}}}}}}},"parameters":[{"name":"page","in":"query","description":"The page number for pagination","required":false,"schema":{"type":"integer","default":1,"minimum":1},"index$":0},{"name":"limit","in":"query","description":"The number of proxy servers to return per page","required":false,"schema":{"type":"integer","default":100,"minimum":1,"maximum":500},"index$":1}],"securitySource":"unspecified"}})
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
  
