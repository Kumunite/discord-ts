import { GatewayActivityTimestamp } from "./GatewayActivityTimestamp";
import { GatewayActivityType } from "../../enums/gateway/GatewayActivityType";
import { IEmoji } from "../IEmoji";
import { GatewayActivityParty } from "./GatewayActivityParty";
import { GatewayActivityAssets } from "./GatewayActivityAssets";
import { GatewayActivitySecrets } from "./GatewayActivitySecrets";
import { GatewayActivityFlag } from "../../enums/gateway/GatewayActivityFlag";

export interface GatewayActivity {
    name: string;
    type: GatewayActivityType;
    url?: string;
    created_at?: number;
    timestamps?: GatewayActivityTimestamp;
    application_id?: string;
    details?: string;
    state?: string;
    emoji?: IEmoji;
    party?: GatewayActivityParty;
    assets?: GatewayActivityAssets;
    secrets?: GatewayActivitySecrets;
    instance?: boolean;
    flags?: GatewayActivityFlag;
}
