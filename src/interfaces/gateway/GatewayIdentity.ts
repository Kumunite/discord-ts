import { GatewayUpdateStatus } from "./GatewayUpdateStatus";

export interface GatewayIdentity {
    token: string;
    properties: any;
    compress?: boolean;
    large_threshold?: number;
    shard?: number[];
    presence?: GatewayUpdateStatus;
    guild_subscriptions?: boolean;
    intents: number;
}
