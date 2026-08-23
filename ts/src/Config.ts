
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Geonode',
        slug: "geonode",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://proxylist.geonode.com/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      proxy: {
      },

    }
  }


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
              "parts": [
                "proxy-list"
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
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

