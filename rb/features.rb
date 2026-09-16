# Geonode SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module GeonodeFeatures
  def self.make_feature(name)
    case name
    when "base"
      GeonodeBaseFeature.new
    when "ratelimit"
      GeonodeRatelimitFeature.new
    when "retry"
      GeonodeRetryFeature.new
    when "test"
      GeonodeTestFeature.new
    when "timeout"
      GeonodeTimeoutFeature.new
    else
      GeonodeBaseFeature.new
    end
  end
end
