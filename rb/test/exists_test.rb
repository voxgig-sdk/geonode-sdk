# Geonode SDK exists test

require "minitest/autorun"
require_relative "../Geonode_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = GeonodeSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
