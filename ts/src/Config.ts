
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


  main = {
    name: 'Geonode',
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
          "type": "`$STRING`"
        },
        {
          "name": "country",
          "type": "`$STRING`"
        },
        {
          "name": "ip",
          "type": "`$STRING`"
        },
        {
          "name": "lastChecked",
          "type": "`$STRING`"
        },
        {
          "name": "port",
          "type": "`$STRING`"
        },
        {
          "name": "protocols",
          "type": "`$ARRAY`"
        },
        {
          "name": "responseTime",
          "type": "`$INTEGER`"
        },
        {
          "name": "upTime",
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

