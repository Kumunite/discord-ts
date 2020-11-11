import { IGuild } from "./IGuild";
import { IUser } from "./IUser";

export interface ITemplate {
    code: string;
    name: string;
    description?: string;
    usage_count: number;
    creator_id: string;
    creator: IUser;
    created_at: Date;
    updated_at: Date;
    source_guild_id: string;
    serialized_source_guild: IGuild;
    is_dirty?: boolean;
}
