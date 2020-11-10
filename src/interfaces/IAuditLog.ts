import { IUser } from "./IUser";
import { IIntegration } from "./IIntegration";
import { Webhook } from "./auth/Webhook";
import { IAuditLogEntry } from "./IAuditLogEntry";

export interface IAuditLog {
    users: IUser[];
    webhooks: Webhook[];
    integrations: IIntegration[];
    audit_log_entries: IAuditLogEntry[];
}
