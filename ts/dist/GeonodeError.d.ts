import { Context } from './Context';
declare class GeonodeError extends Error {
    isGeonodeError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { GeonodeError };
