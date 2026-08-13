# frozen_string_literal: true

# Typed models for the Geonode SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Proxy entity data model.
#
# @!attribute [rw] anonymityLevel
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] ip
#   @return [String, nil]
#
# @!attribute [rw] lastChecked
#   @return [String, nil]
#
# @!attribute [rw] port
#   @return [String, nil]
#
# @!attribute [rw] protocols
#   @return [Array, nil]
#
# @!attribute [rw] responseTime
#   @return [Integer, nil]
#
# @!attribute [rw] upTime
#   @return [Float, nil]
Proxy = Struct.new(
  :anonymityLevel,
  :country,
  :ip,
  :lastChecked,
  :port,
  :protocols,
  :responseTime,
  :upTime,
  keyword_init: true
)

# Request payload for Proxy#list.
#
# @!attribute [rw] anonymityLevel
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] ip
#   @return [String, nil]
#
# @!attribute [rw] lastChecked
#   @return [String, nil]
#
# @!attribute [rw] port
#   @return [String, nil]
#
# @!attribute [rw] protocols
#   @return [Array, nil]
#
# @!attribute [rw] responseTime
#   @return [Integer, nil]
#
# @!attribute [rw] upTime
#   @return [Float, nil]
ProxyListMatch = Struct.new(
  :anonymityLevel,
  :country,
  :ip,
  :lastChecked,
  :port,
  :protocols,
  :responseTime,
  :upTime,
  keyword_init: true
)

