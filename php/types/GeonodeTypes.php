<?php
declare(strict_types=1);

// Typed models for the Geonode SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Proxy entity data model. */
class Proxy
{
    public ?string $anonymity_level = null;
    public ?string $country = null;
    public ?string $ip = null;
    public ?string $last_checked = null;
    public ?string $port = null;
    public ?array $protocol = null;
    public ?int $response_time = null;
    public ?float $up_time = null;
}

/** Request payload for Proxy#list. */
class ProxyListMatch
{
    public ?string $anonymity_level = null;
    public ?string $country = null;
    public ?string $ip = null;
    public ?string $last_checked = null;
    public ?string $port = null;
    public ?array $protocol = null;
    public ?int $response_time = null;
    public ?float $up_time = null;
}

