import { IUser } from "./IUser";
import { GuildMember } from "./GuildMember";
import { ChannelMention } from "./ChannelMention";
import { Attachment } from "./Attachment";
import { Embed } from "./embed/Embed";
import { Reaction } from "./Reaction";
import { MessageType } from "../enums/MessageType";
import { MessageActivity } from "./MessageActivity";
import { MessageApplication } from "./MessageApplication";

export interface IMessage {
    id: string;
    channel_id: string;
    author: IUser;
    timestamp: Date;
    tts: boolean;
    mention_everyone: boolean;
    mention_roles?: string[];
    mentions: IUser[];
    guild_id?: string;
    member?: GuildMember;
    content?: string;
    edited_timestamp?: Date;
    mention_channels?: ChannelMention[];
    attachments?: Attachment[];
    embeds?: Embed[];
    reactions?: Reaction[];
    nonce?: string | number;
    pinned: boolean;
    webhook_id?: string;
    type: MessageType;
    activity?: MessageActivity;
    application?: MessageApplication;
    message_reference?: string;
    flags?: string; // message flags combined as a bitfield
}
