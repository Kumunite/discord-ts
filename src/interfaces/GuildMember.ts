import { IUser } from "./IUser";

export interface GuildMember {
    user?: IUser;
    nick?: string;
    roles: string[];
    joined_at: Date;
    premium_since?: Date;
    deaf: boolean;
    mute: boolean;
}
