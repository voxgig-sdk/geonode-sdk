<?php
declare(strict_types=1);

// Geonode SDK utility: prepare_method

class GeonodePrepareMethod
{
    private const METHOD_MAP = [
        'create' => 'POST',
        'update' => 'PUT',
        'load' => 'GET',
        'list' => 'GET',
        'remove' => 'DELETE',
        'patch' => 'PATCH',
    ];

    public static function call(GeonodeContext $ctx): string
    {
        return self::METHOD_MAP[$ctx->op->name] ?? 'GET';
    }
}
