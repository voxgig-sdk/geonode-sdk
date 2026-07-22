<?php
declare(strict_types=1);

// Geonode SDK utility: result_body

class GeonodeResultBody
{
    public static function call(GeonodeContext $ctx): ?GeonodeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
