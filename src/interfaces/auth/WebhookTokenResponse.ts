import { Webhook } from "./Webhook";

export interface WebhookTokenResponse {
    token_type: string;
    access_token: string;
    scope: string;
    expires_in: number;
    refresh_token: string;
    webhook: Webhook;
}
