# Geonode SDK utility: make_context
require_relative '../core/context'
module GeonodeUtilities
  MakeContext = ->(ctxmap, basectx) {
    GeonodeContext.new(ctxmap, basectx)
  }
end
