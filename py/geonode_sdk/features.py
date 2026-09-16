# Geonode SDK feature factory

from geonode_sdk.feature.base_feature import GeonodeBaseFeature
from geonode_sdk.feature.ratelimit_feature import GeonodeRatelimitFeature
from geonode_sdk.feature.retry_feature import GeonodeRetryFeature
from geonode_sdk.feature.test_feature import GeonodeTestFeature
from geonode_sdk.feature.timeout_feature import GeonodeTimeoutFeature


_FEATURES = {
    "base": lambda: GeonodeBaseFeature(),
    "ratelimit": lambda: GeonodeRatelimitFeature(),
    "retry": lambda: GeonodeRetryFeature(),
    "test": lambda: GeonodeTestFeature(),
    "timeout": lambda: GeonodeTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
