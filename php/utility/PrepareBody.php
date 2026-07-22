<?php
declare(strict_types=1);

// Geonode SDK utility: prepare_body

class GeonodePrepareBody
{
    public static function call(GeonodeContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
