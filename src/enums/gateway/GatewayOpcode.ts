export enum GatewayOpcode {
    dispatch,
    heartbeat,
    identify,
    presenceUpdate,
    voiceStateUpdate,
    resume = 6,
    reconnect,
    requestGuildMembers,
    invalidSession,
    hello,
    heartbeatACK,
}
