import { RequestUtil } from "../utils/requestUtil";

import { IUser } from "../interfaces/IUser";
import { IAuditLog } from "../interfaces/IAuditLog";
import { Webhook } from "../interfaces/auth/Webhook";
import { IIntegration } from "../interfaces/IIntegration";
import { IAuditLogEntry } from "../interfaces/IAuditLogEntry";

import { AuditLogEvent } from "../enums/AuditLogEvent";

export class AuditLog implements IAuditLog {
    users: IUser[];
    webhooks: Webhook[];
    integrations: IIntegration[];
    audit_log_entries: IAuditLogEntry[];

    constructor(auditLogs: IAuditLog) {
        this.audit_log_entries = auditLogs.audit_log_entries;
        this.integrations = auditLogs.integrations;
        this.users = auditLogs.users;
        this.webhooks = auditLogs.webhooks;
    }

    async get(guildId: string): Promise<IAuditLog> {
        const path = `/guilds/${guildId}/audit-logs`;
        type queryType = {
            user_id: string;
            action_type: AuditLogEvent;
            before: string;
            limit: number;
        };
        const response = await RequestUtil.query(path, <queryType>{});
        return <IAuditLog>response.body;
    }
}
