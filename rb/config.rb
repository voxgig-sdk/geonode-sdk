# Geonode SDK configuration

module GeonodeConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Geonode",
        "slug" => "geonode",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://proxylist.geonode.com/api",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "proxy" => {},
        },
      },
      "entity" => {
        "proxy" => {
          "fields" => [
            {
              "name" => "anonymityLevel",
              "title" => "Anonymity Level",
              "type" => "`$STRING`",
              "short" => "Level of anonymity provided by the proxy",
            },
            {
              "name" => "country",
              "title" => "Country",
              "type" => "`$STRING`",
              "short" => "Country code where the proxy is located",
            },
            {
              "name" => "ip",
              "title" => "Ip",
              "type" => "`$STRING`",
              "short" => "IP address of the proxy server",
            },
            {
              "name" => "lastChecked",
              "title" => "Last Checked",
              "type" => "`$STRING`",
              "short" => "Timestamp of last proxy check",
              "format" => "date-time",
            },
            {
              "name" => "port",
              "title" => "Port",
              "type" => "`$STRING`",
              "short" => "Port number of the proxy server",
            },
            {
              "name" => "protocols",
              "title" => "Protocols",
              "type" => "`$ARRAY`",
              "short" => "Supported protocols",
            },
            {
              "name" => "responseTime",
              "title" => "Response Time",
              "type" => "`$INTEGER`",
              "short" => "Average response time in milliseconds",
            },
            {
              "name" => "upTime",
              "title" => "Up Time",
              "type" => "`$NUMBER`",
              "short" => "Uptime percentage",
            },
          ],
          "name" => "proxy",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/proxy-list",
                  "segments" => [
                    {
                      "lit" => "proxy-list",
                    },
                  ],
                  "parts" => [
                    "proxy-list",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 100,
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "limit",
                      "page",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    GeonodeFeatures.make_feature(name)
  end
end
