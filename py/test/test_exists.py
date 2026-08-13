# Geonode SDK exists test

import pytest
from geonode_sdk import GeonodeSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = GeonodeSDK.test(None, None)
        assert testsdk is not None
