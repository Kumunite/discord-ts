export interface GatewayPayload {
    op: number; // opcode for the payload
    d: any; // event data
    s?: number; // sequence number, used for resuming sessions and heartbeats
    t?: string; // the event name for this payload
}
