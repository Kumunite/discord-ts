import { GatewayUpdateStatus } from "../GatewayUpdateStatus";

export interface IdentifyEvent {
    token: string;
    properties: ConnectionProperties;
    compress?: boolean;
    large_threshold?: number;
    shard?: number[]; // (shard_id, num_shards)
    presence?: GatewayUpdateStatus;
    guild_subscriptions?: boolean;
    intents: number;
}

interface ConnectionProperties {
    $os: string;
    $browser: string;
    $device: string;
}
