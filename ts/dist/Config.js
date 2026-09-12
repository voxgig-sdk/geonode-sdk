"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Geonode',
        slug: "geonode",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://proxylist.geonode.com/api",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            proxy: {},
        }
    };
    entity = {
        "proxy": {
            "fields": [
                {
                    "name": "anonymityLevel",
                    "short": "Level of anonymity provided by the proxy",
                    "type": "`$STRING`"
                },
                {
                    "name": "country",
                    "short": "Country code where the proxy is located",
                    "type": "`$STRING`"
                },
                {
                    "name": "ip",
                    "short": "IP address of the proxy server",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "lastChecked",
                    "short": "Timestamp of last proxy check",
                    "type": "`$STRING`"
                },
                {
                    "name": "port",
                    "short": "Port number of the proxy server",
                    "type": "`$STRING`"
                },
                {
                    "name": "protocols",
                    "short": "Supported protocols",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "responseTime",
                    "short": "Average response time in milliseconds",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "upTime",
                    "short": "Uptime percentage",
                    "type": "`$NUMBER`"
                }
            ],
            "name": "proxy",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": 100,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/proxy-list",
                            "segments": [
                                {
                                    "lit": "proxy-list"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "limit",
                                    "page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "proxy-list"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map