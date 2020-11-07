import { IUser } from "./IUser";
import { IIntegration } from "./IIntegration";

export interface IAuditLogs {
    webhooks: string;
    users: IUser[];
    audit_log_entries: string;
    integrations: IIntegration[];
}
