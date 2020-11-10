import { AllowedMentionType } from "../enums/AllowedMentionType";

export interface AllowedMention {
    parse: AllowedMentionType[];
    roles: string[];
    users: string[];
}
