import { ChannelType } from "../enums/ChannelType";

export interface ChannelMention {
    id: string;
    guild_id: string;
    type: ChannelType;
    name: string;
}
