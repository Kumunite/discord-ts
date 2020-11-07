import { RequestUtil } from "../utils/requestUtil";

import { IUser } from "../interfaces/IUser";
import { IAuditLogs } from "../interfaces/IAuditLogs";
import { IIntegration } from "../interfaces/IIntegration";

export class AuditLogs implements IAuditLogs {
    audit_log_entries: string;
    integrations: IIntegration[];
    users: IUser[];
    webhooks: string;

    constructor(auditLogs: IAuditLogs) {
        this.audit_log_entries = auditLogs.audit_log_entries;
        this.integrations = auditLogs.integrations;
        this.users = auditLogs.users;
        this.webhooks = auditLogs.webhooks;
    }

    async get(guildId: string) {
        const path = `/guilds/${guildId}/audit-logs`;
        const response = await RequestUtil.request(path);
    }
}
