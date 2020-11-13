export enum VoiceOpcode {
    Identify,
    SelectProtocol,
    Ready,
    Heartbeat,
    SessionDescription,
    Speaking,
    HeartbeatACK,
    Resume,
    Hello,
    Resumed,
    ClientDisconnect = 13,
}
