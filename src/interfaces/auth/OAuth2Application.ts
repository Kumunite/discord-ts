import { IUser } from "../IUser";
import { ITeam } from "../ITeam";

export interface OAuth2Application {
    id: string;
    name: string;
    icon?: string;
    rpc_origins: string[];
    bot_public: boolean;
    bot_require_code_grant: boolean;
    owner: IUser;
    summary: string;
    verify_key: string;
    team?: ITeam;
    guild_id?: string;
    primary_sku_id?: string;
    slug?: string;
    cover_image?: string;
}
