import { IUser } from "./IUser";
import { WebhookType } from "../enums/WebhookType";

export interface IWebhook {
    id: string;
    type: WebhookType;
    guild_id?: string;
    channel_id: string;
    user?: IUser;
    name?: string;
    avatar?: string;
    token?: string;
    application_id?: string;
}
