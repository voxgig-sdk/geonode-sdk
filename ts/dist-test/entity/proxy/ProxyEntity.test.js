"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ProxyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GEONODE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GEONODE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GeonodeSDK.test();
        const ent = testsdk.Proxy();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GEONODE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'proxy.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "anonymityLevel": { "a": true, "h": "Anonymity Level", "n": "anonymityLevel", "r": false, "sh": "Level of anonymity provided by the proxy", "t": "`$STRING`", "key$": "anonymityLevel", "index$": 0 }, "country": { "a": true, "h": "Country", "n": "country", "r": false, "sh": "Country code where the proxy is located", "t": "`$STRING`", "key$": "country", "index$": 1 }, "ip": { "a": true, "h": "Ip", "n": "ip", "r": false, "sh": "IP address of the proxy server", "t": "`$STRING`", "key$": "ip", "index$": 2 }, "lastChecked": { "a": true, "fo": "date-time", "h": "Last Checked", "n": "lastChecked", "r": false, "sh": "Timestamp of last proxy check", "t": "`$STRING`", "key$": "lastChecked", "index$": 3 }, "port": { "a": true, "h": "Port", "n": "port", "r": false, "sh": "Port number of the proxy server", "t": "`$STRING`", "key$": "port", "index$": 4 }, "protocols": { "a": true, "h": "Protocols", "n": "protocols", "r": false, "sh": "Supported protocols", "t": "`$ARRAY`", "key$": "protocols", "index$": 5 }, "responseTime": { "a": true, "h": "Response Time", "n": "responseTime", "r": false, "sh": "Average response time in milliseconds", "t": "`$INTEGER`", "key$": "responseTime", "index$": 6 }, "upTime": { "a": true, "h": "Up Time", "n": "upTime", "r": false, "sh": "Uptime percentage", "t": "`$NUMBER`", "key$": "upTime", "index$": 7 } }, "name": "proxy", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /proxy-list", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 100, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/proxy-list", "q": { "exist": ["limit", "page"] }, "r": {}, "s": [{ "lit": "proxy-list" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "proxy", "name__orig": "proxy", "Name": "Proxy", "name_": "proxy", "name-": "proxy", "NAME": "PROXY", "index$": 0 }, { "active": true, "entity": "proxy", "key$": "BasicProxyFlow", "kind": "basic", "name": "BasicProxyFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "proxy_ref01" } }], "index$": 0 }] }, 'Proxy', { "GET /proxy-list": { "protocol": "http", "operationId": "getProxyList", "responses": { "200": { "description": "Successful response with proxy list", "content": { "application/json": { "schema": { "type": "object", "properties": { "data": { "description": "Array of proxy server objects", "items": { "properties": { "anonymityLevel": { "description": "Level of anonymity provided by the proxy", "example": "elite", "type": "string", "key$": "anonymityLevel" }, "country": { "description": "Country code where the proxy is located", "example": "US", "type": "string", "key$": "country" }, "ip": { "description": "IP address of the proxy server", "example": "192.168.1.1", "type": "string", "key$": "ip" }, "lastChecked": { "description": "Timestamp of last proxy check", "format": "date-time", "type": "string", "key$": "lastChecked" }, "port": { "description": "Port number of the proxy server", "example": "8080", "type": "string", "key$": "port" }, "protocols": { "description": "Supported protocols", "items": { "example": "http", "type": "string" }, "type": "array", "key$": "protocols" }, "responseTime": { "description": "Average response time in milliseconds", "example": 150, "type": "integer", "key$": "responseTime" }, "upTime": { "description": "Uptime percentage", "example": 99.5, "type": "number", "key$": "upTime" } }, "type": "object", "index$": 0 }, "key$": "data", "type": "array" }, "total": { "description": "Total number of available proxies", "key$": "total", "type": "integer" }, "page": { "description": "Current page number", "key$": "page", "type": "integer" }, "limit": { "description": "Number of items per page", "key$": "limit", "type": "integer" } } } } } }, "400": { "description": "Bad request - Invalid parameters", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" } } } } } }, "429": { "description": "Too many requests - Rate limit exceeded", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" } } } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" } } } } } } }, "parameters": [{ "name": "page", "in": "query", "description": "The page number for pagination", "required": false, "schema": { "type": "integer", "default": 1, "minimum": 1 }, "index$": 0 }, { "name": "limit", "in": "query", "description": "The number of proxy servers to return per page", "required": false, "schema": { "type": "integer", "default": 100, "minimum": 1, "maximum": 500 }, "index$": 1 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let proxy_ref01_data = Object.values(setup.data.existing.proxy)[0];
        // LIST
        const proxy_ref01_ent = client.Proxy();
        const proxy_ref01_match = {};
        const proxy_ref01_list = (await proxy_ref01_ent.list(proxy_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/proxy/ProxyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GeonodeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['proxy01', 'proxy02', 'proxy03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GEONODE_TEST_PROXY_ENTID': idmap,
        'GEONODE_TEST_LIVE': 'FALSE',
        'GEONODE_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['GEONODE_TEST_PROXY_ENTID'];
    const live = 'TRUE' === env.GEONODE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GEONODE_TEST_PROXY_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.GeonodeSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=ProxyEntity.test.js.map