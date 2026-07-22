
import { Context } from './Context'


class GeonodeError extends Error {

  isGeonodeError = true

  sdk = 'Geonode'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  GeonodeError
}

