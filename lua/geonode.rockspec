package = "voxgig-sdk-geonode"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/geonode-sdk.git",
  tag = "lua/v0.0.1",
  dir = "geonode-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the Geonode public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/geonode-sdk",
  issues_url = "https://github.com/voxgig-sdk/geonode-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "geonode" }
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["geonode_sdk"] = "geonode_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
