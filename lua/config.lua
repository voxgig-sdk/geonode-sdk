-- Geonode SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Geonode",
      slug = "geonode",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://proxylist.geonode.com/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["proxy"] = {},
      },
    },
    entity = {
      ["proxy"] = {
        ["fields"] = {
          {
            ["name"] = "anonymityLevel",
            ["short"] = "Level of anonymity provided by the proxy",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "country",
            ["short"] = "Country code where the proxy is located",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ip",
            ["short"] = "IP address of the proxy server",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lastChecked",
            ["short"] = "Timestamp of last proxy check",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "port",
            ["short"] = "Port number of the proxy server",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "protocols",
            ["short"] = "Supported protocols",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "responseTime",
            ["short"] = "Average response time in milliseconds",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "upTime",
            ["short"] = "Uptime percentage",
            ["type"] = "`$NUMBER`",
          },
        },
        ["name"] = "proxy",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 100,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/proxy-list",
                ["parts"] = {
                  "proxy-list",
                },
                ["select"] = {
                  ["exist"] = {
                    "limit",
                    "page",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
