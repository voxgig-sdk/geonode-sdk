"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeonodeError = void 0;
class GeonodeError extends Error {
    isGeonodeError = true;
    sdk = 'Geonode';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.GeonodeError = GeonodeError;
//# sourceMappingURL=GeonodeError.js.map