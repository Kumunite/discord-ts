import { IOverwrite } from "./IOverwrite";
import { IUser } from "./IUser";

import { ChannelType } from "../enums/ChannelType";

export interface IChannel {
    id: string;
    type: ChannelType;
    guild_id?: string;
    position?: string;
    permission_overwrites?: IOverwrite[];
    name?: string;
    topic?: string;
    nsfw?: boolean;
    last_message_id?: string;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: IUser[];
    icon?: string;
    owner_id?: string;
    application_id?: string;
    parent_id?: string;
    last_pin_timestamp?: Date;
}
