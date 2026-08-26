<?php
declare(strict_types=1);

// Geonode SDK configuration

class GeonodeConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Geonode",
                "slug" => "geonode",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://proxylist.geonode.com/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "proxy" => [],
                ],
            ],
            "entity" => [
        'proxy' => [
          'fields' => [
            [
              'name' => 'anonymityLevel',
              'short' => 'Level of anonymity provided by the proxy',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'country',
              'short' => 'Country code where the proxy is located',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ip',
              'short' => 'IP address of the proxy server',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lastChecked',
              'short' => 'Timestamp of last proxy check',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'port',
              'short' => 'Port number of the proxy server',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'protocols',
              'short' => 'Supported protocols',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'responseTime',
              'short' => 'Average response time in milliseconds',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'upTime',
              'short' => 'Uptime percentage',
              'type' => '`$NUMBER`',
            ],
          ],
          'name' => 'proxy',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/proxy-list',
                  'parts' => [
                    'proxy-list',
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return GeonodeFeatures::make_feature($name);
    }
}
