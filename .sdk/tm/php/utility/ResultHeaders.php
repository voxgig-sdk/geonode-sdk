<?php
declare(strict_types=1);

// Geonode SDK utility: result_headers

class GeonodeResultHeaders
{
    public static function call(GeonodeContext $ctx): ?GeonodeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
