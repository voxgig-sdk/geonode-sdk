# Geonode SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module GeonodeFeatures
  def self.make_feature(name)
    case name
    when "base"
      GeonodeBaseFeature.new
    when "test"
      GeonodeTestFeature.new
    else
      GeonodeBaseFeature.new
    end
  end
end
