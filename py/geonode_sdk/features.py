# Geonode SDK feature factory

from geonode_sdk.feature.base_feature import GeonodeBaseFeature
from geonode_sdk.feature.test_feature import GeonodeTestFeature


def _make_feature(name):
    features = {
        "base": lambda: GeonodeBaseFeature(),
        "test": lambda: GeonodeTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
