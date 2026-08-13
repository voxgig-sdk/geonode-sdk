-- Typed models for the Geonode SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Proxy
---@field anonymityLevel? string
---@field country? string
---@field ip? string
---@field lastChecked? string
---@field port? string
---@field protocols? table
---@field responseTime? number
---@field upTime? number

---@class ProxyListMatch
---@field anonymityLevel? string
---@field country? string
---@field ip? string
---@field lastChecked? string
---@field port? string
---@field protocols? table
---@field responseTime? number
---@field upTime? number

local M = {}

return M
