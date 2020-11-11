import { IGuild } from "./IGuild";
import { IUser } from "./IUser";
import { IChannel } from "./IChannel";
import { UserTargetType } from "../enums/UserTargetType";

export interface IInvite {
    code: string;
    guild?: IGuild;
    channel: IChannel;
    inviter?: IUser;
    target_user?: IUser;
    target_user_type?: UserTargetType;
    approximate_presence_count?: number;
    approximate_member_count?: number;
}
