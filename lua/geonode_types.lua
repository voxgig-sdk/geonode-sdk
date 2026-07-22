-- Typed models for the Geonode SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Proxy
---@field anonymity_level? string
---@field country? string
---@field ip? string
---@field last_checked? string
---@field port? string
---@field protocol? table
---@field response_time? number
---@field up_time? number

---@class ProxyListMatch
---@field anonymity_level? string
---@field country? string
---@field ip? string
---@field last_checked? string
---@field port? string
---@field protocol? table
---@field response_time? number
---@field up_time? number

local M = {}

return M
