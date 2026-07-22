<?php
declare(strict_types=1);

// Geonode SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class GeonodeMakeContext
{
    public static function call(array $ctxmap, ?GeonodeContext $basectx): GeonodeContext
    {
        return new GeonodeContext($ctxmap, $basectx);
    }
}
