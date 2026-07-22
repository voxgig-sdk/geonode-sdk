package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewProxyEntityFunc func(client *GeonodeSDK, entopts map[string]any) GeonodeEntity

