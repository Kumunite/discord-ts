import { GatewayStatus } from "../../enums/gateway/GatewayStatus";

export interface GatewayUpdateStatus {
    since?: number;
    activities?: number;
    status?: GatewayStatus;
    afk?: boolean;
}
