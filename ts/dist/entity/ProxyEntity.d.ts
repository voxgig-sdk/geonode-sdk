import { GeonodeEntityBase } from '../GeonodeEntityBase';
import type { GeonodeSDK } from '../GeonodeSDK';
import type { Control } from '../types';
import type { ProxyType, ProxyListMatch } from '../GeonodeTypes';
declare class ProxyEntity extends GeonodeEntityBase<ProxyType> {
    constructor(client: GeonodeSDK, entopts: any);
    make(this: ProxyEntity): ProxyEntity;
    list(this: any, reqmatch?: ProxyListMatch, ctrl?: Control): Promise<ProxyEntity[]>;
}
export { ProxyEntity };
