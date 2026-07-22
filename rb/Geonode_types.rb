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
# @!attribute [rw] anonymity_level
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] ip
#   @return [String, nil]
#
# @!attribute [rw] last_checked
#   @return [String, nil]
#
# @!attribute [rw] port
#   @return [String, nil]
#
# @!attribute [rw] protocol
#   @return [Array, nil]
#
# @!attribute [rw] response_time
#   @return [Integer, nil]
#
# @!attribute [rw] up_time
#   @return [Float, nil]
Proxy = Struct.new(
  :anonymity_level,
  :country,
  :ip,
  :last_checked,
  :port,
  :protocol,
  :response_time,
  :up_time,
  keyword_init: true
)

# Request payload for Proxy#list.
#
# @!attribute [rw] anonymity_level
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] ip
#   @return [String, nil]
#
# @!attribute [rw] last_checked
#   @return [String, nil]
#
# @!attribute [rw] port
#   @return [String, nil]
#
# @!attribute [rw] protocol
#   @return [Array, nil]
#
# @!attribute [rw] response_time
#   @return [Integer, nil]
#
# @!attribute [rw] up_time
#   @return [Float, nil]
ProxyListMatch = Struct.new(
  :anonymity_level,
  :country,
  :ip,
  :last_checked,
  :port,
  :protocol,
  :response_time,
  :up_time,
  keyword_init: true
)

