package voxgiggeonodesdk

import (
	"github.com/voxgig-sdk/geonode-sdk/go/core"
	"github.com/voxgig-sdk/geonode-sdk/go/entity"
	"github.com/voxgig-sdk/geonode-sdk/go/feature"
	_ "github.com/voxgig-sdk/geonode-sdk/go/utility"
)

// Type aliases preserve external API.
type GeonodeSDK = core.GeonodeSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type GeonodeEntity = core.GeonodeEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type GeonodeError = core.GeonodeError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewProxyEntityFunc = func(client *core.GeonodeSDK, entopts map[string]any) core.GeonodeEntity {
		return entity.NewProxyEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewGeonodeSDK = core.NewGeonodeSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewGeonodeSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *GeonodeSDK  { return NewGeonodeSDK(nil) }
func Test() *GeonodeSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
