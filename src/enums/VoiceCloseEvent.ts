export enum VoiceCloseEvent {
    unknownError = 4000,
    notAuthenticated = 4003,
    authenticationFailed = 4004,
    alreadyAuthenticated = 4005,
    sessionNoLongerValid = 4006,
    sessionTimedOut = 4009,
    serverNotFound = 4011,
    unknownProtocol = 4012,
    disconnected = 4014,
    voiceServerCrashed = 4015,
    unknownEncryptionMode = 4015,
}
