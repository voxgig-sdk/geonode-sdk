# Geonode SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Geonode",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://proxylist.geonode.com/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "proxy": {},
            },
        },
        "entity": {
      "proxy": {
        "fields": [
          {
            "name": "anonymityLevel",
            "type": "`$STRING`",
          },
          {
            "name": "country",
            "type": "`$STRING`",
          },
          {
            "name": "ip",
            "type": "`$STRING`",
          },
          {
            "name": "lastChecked",
            "type": "`$STRING`",
          },
          {
            "name": "port",
            "type": "`$STRING`",
          },
          {
            "name": "protocols",
            "type": "`$ARRAY`",
          },
          {
            "name": "responseTime",
            "type": "`$INTEGER`",
          },
          {
            "name": "upTime",
            "type": "`$NUMBER`",
          },
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
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/proxy-list",
                "parts": [
                  "proxy-list",
                ],
                "select": {
                  "exist": [
                    "limit",
                    "page",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
