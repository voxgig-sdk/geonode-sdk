package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Geonode",
			"slug": "geonode",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://proxylist.geonode.com/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"proxy": map[string]any{},
			},
		},
		"entity": map[string]any{
			"proxy": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "anonymityLevel",
						"short": "Level of anonymity provided by the proxy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "country",
						"short": "Country code where the proxy is located",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip",
						"short": "IP address of the proxy server",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "lastChecked",
						"short": "Timestamp of last proxy check",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "port",
						"short": "Port number of the proxy server",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "protocols",
						"short": "Supported protocols",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "responseTime",
						"short": "Average response time in milliseconds",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "upTime",
						"short": "Uptime percentage",
						"type": "`$NUMBER`",
					},
				},
				"name": "proxy",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/proxy-list",
								"segments": []any{
									map[string]any{
										"lit": "proxy-list",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"proxy-list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
