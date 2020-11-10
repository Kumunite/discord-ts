import { RequestUtil } from "../utils/requestUtil";

import { IChannel } from "../interfaces/IChannel";
import { ChannelType } from "../enums/ChannelType";
import { IOverwrite } from "../interfaces/IOverwrite";
import { IMessage } from "../interfaces/IMessage";
import { AuditLogEvent } from "../enums/AuditLogEvent";
import { Embed } from "../interfaces/embed/Embed";
import { AllowedMention } from "../interfaces/AllowedMention";
import { IUser } from "../interfaces/IUser";
import { MessageFlag } from "../enums/MessageFlag";

export class Channel {
    channel: IChannel;

    constructor(channel: IChannel) {
        this.channel = channel;
    }

    async get() {
        const path = `/channels/${this.channel.id}`;
        const response = await RequestUtil.request(path);
        return <IChannel>response.body;
    }

    async modify() {
        const path = `/channels/${this.channel.id}`;
        type body = {
            name: string;
            type: ChannelType;
            position?: string;
            topic?: string;
            nsfw?: boolean;
            rate_limit_per_user: number;
            bitrate: number;
            user_limit: number;
            permission_overwrites: IOverwrite[];
            parent_id: string;
        };
        const response = await RequestUtil.patch(path, <body>{});
        return <IChannel>response.body;
    }

    async delete() {
        const path = `/channels/${this.channel.id}`;
        const response = await RequestUtil.delete(path);
        return <IChannel>response.body;
    }

    async getMessages() {
        const path = `/channels/${this.channel.id}/messages`;
        type queryType = {
            around: string;
            before: string;
            after: string;
            limit: number;
        };
        const response = await RequestUtil.query(path, <queryType>{});
        return <IMessage[]>response.body;
    }

    async getMessage(messageId: string) {
        const path = `/channels/${this.channel.id}/messages/${messageId}`;
        const response = await RequestUtil.get(path);
        return <IMessage>response.body;
    }

    async createMessage() {
        const path = `/channels/${this.channel.id}/messages`;
        type body = {
            content: string;
            nonce: number | string;
            tts: boolean;
            file: any;
            embed: Embed;
            payload_json: string;
            allowed_mentions: AllowedMention;
        };
        const response = await RequestUtil.post(path, <body>{});
        return <IMessage>response.body;
    }

    async crossPostMessage(messageId: string) {
        const path = `/channels/${this.channel.id}/messages/${messageId}/crosspost`;
        const response = await RequestUtil.post(path, {});
        return <IMessage>response.body;
    }

    async createReaction(messageId: string, emoji: string) {
        const path = `/channels/${this.channel.id}/messages/${messageId}/reactions/${emoji}/@me`;
        const response = await RequestUtil.post(path, {});
        return <IMessage>response.body;
    }

    async deleteOwnReaction(messageId: string, emoji: string) {
        const path = `/channels/${this.channel.id}/messages/${messageId}/reactions/${emoji}/@me`;
        const response = await RequestUtil.delete(path);
        return <IMessage>response.body;
    }

    async deleteReaction(messageId: string, emoji: string, userId: string) {
        const path = `/channels/${this.channel.id}/messages/${messageId}/reactions/${emoji}/${userId}`;
        const response = await RequestUtil.delete(path);
        return <IMessage>response.body;
    }

    async getReactions(messageId: string, emoji: string) {
        const path = `/channels/${this.channel.id}/messages/${messageId}/reactions/${emoji}`;
        type query = {
            before: string;
            after: string;
            limit: number;
        };
        const response = await RequestUtil.query(path, <query>{});
        return <IUser>response.body;
    }

    async deleteAllReactions(messageId: string) {
        const path = `/channels/${this.channel.id}/messages/${messageId}/reactions`;
        const response = await RequestUtil.delete(path);
        return <IMessage>response.body;
    }

    async deleteAllReactionsForEmoji(messageId: string, emoji: string) {
        const path = `/channels/${this.channel.id}/messages/${messageId}/reactions/${emoji}`;
        const response = await RequestUtil.delete(path);
        return <IMessage>response.body;
    }

    async editMessage(messageId: string) {
        const path = `/channels/${this.channel.id}/messages/${messageId}`;
        type body = {
            content: string;
            embed: Embed;
            flags: number;
        };
        const response = await RequestUtil.patch(path, <body>{});
        return <IMessage>response.body;
    }

    async deleteMessage(messageId: string) {
        const path = `/channels/${this.channel.id}/messages/${messageId}`;
        const response = await RequestUtil.delete(path);
        return <IMessage>response.body;
    }

    async deleteMessages(messageIds: string[]) {
        const path = `/channels/${this.channel.id}/messages/bulk-delete`;
        type body = {
            messages: string[];
        };
        const response = await RequestUtil.post(path, <body>{ messages: messageIds });
        return <IMessage>response.body;
    }

    async editChannelPermissions(overwriteId: string) {
        const path = `/channels/${this.channel.id}/permissions/${overwriteId}`;
        type body = {
            allow: string;
            deny: string;
            type: number;
        };
        const response = await RequestUtil.put(path, <body>{});
        return <IMessage>response.body;
    }
}
