<?php
declare(strict_types=1);

// Geonode SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class GeonodeFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new GeonodeBaseFeature();
            case "test":
                return new GeonodeTestFeature();
            default:
                return new GeonodeBaseFeature();
        }
    }
}
