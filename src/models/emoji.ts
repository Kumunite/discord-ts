import { RequestUtil } from "../utils/requestUtil";

import { IEmoji } from "../interfaces/IEmoji";

export class Emoji {
    emoji: IEmoji;

    constructor(emoji: IEmoji) {
        this.emoji = emoji;
    }

    async getAll(guildId: string) {
        const path = `/guilds/${guildId}/emojis`;
        const response = await RequestUtil.get(path);
        return response;
    }

    async get(guildId: string) {
        const path = `/guilds/${guildId}/emojis/${this.emoji.id}`;
        const response = await RequestUtil.get(path);
        return response;
    }

    async create(guildId: string) {
        const path = `/guilds/${guildId}/emojis`;
        type body = { name?: string; image?: ImageData; roles?: string[] };
        const response = await RequestUtil.post(path, <body>{});
        return response;
    }

    async modify(guildId: string) {
        const path = `/guilds/${guildId}/emojis/${this.emoji.id}`;
        type body = { name?: string; roles?: string[] };
        const response = await RequestUtil.patch(path, <body>{});
        return response;
    }

    async delete(guildId: string) {
        const path = `/guilds/${guildId}/emojis/${this.emoji.id}`;
        const response = await RequestUtil.delete(path);
        return response;
    }
}
