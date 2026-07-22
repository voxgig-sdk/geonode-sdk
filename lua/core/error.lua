-- Geonode SDK error

local GeonodeError = {}
GeonodeError.__index = GeonodeError


function GeonodeError.new(code, msg, ctx)
  local self = setmetatable({}, GeonodeError)
  self.is_sdk_error = true
  self.sdk = "Geonode"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function GeonodeError:error()
  return self.msg
end


function GeonodeError:__tostring()
  return self.msg
end


return GeonodeError
