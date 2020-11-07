import { AuditLogEvent } from "../enums/AuditLogEvent";

import { IAuditLogChange } from "./IAuditLogChange";
import { IAuditEntry } from "./IAuditEntry";

export interface IAuditLogEntry {
    target_id?: string;
    changes: IAuditLogChange | null;
    user_id: string;
    id: string;
    action_type: AuditLogEvent;
    options?: IAuditEntry | null;
    reasons: string | null;
}
