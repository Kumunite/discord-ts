import { IUser } from "./IUser";
import { IAccount } from "./IAccount";
import { IApplication } from "./IApplication";

export interface IIntegration {
    id: string;
    name: string;
    type: string;
    enabled: boolean;
    syncing: boolean;
    role_id: string;
    enable_emoticons?: boolean;
    expire_behavior: boolean;
    expire_grace_period: number;
    user?: IUser;
    account: IAccount;
    synced_at: Date;
    subscriber_count: number;
    revoked: boolean;
    application?: IApplication;
}
