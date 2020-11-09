export interface SessionStartLimit {
    total: number; // The total number of session starts the current user is allowed
    remaining: number; // The remaining number of session starts the current user is allowed
    reset_after: number; // The number of milliseconds after which the limit resets
}
