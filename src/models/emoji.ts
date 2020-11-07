import { RequestUtil } from "../utils/requestUtil";

import { IEmoji } from "../interfaces/IEmoji";
import { IRole } from "../interfaces/IRole";
import { IUser } from "../interfaces/IUser";

export class Emoji implements IEmoji {
    id: string;
    name: string;
    roles: IRole[];
    user: IUser[];

    constructor(emoji: IEmoji) {
        this.id = emoji.id;
        this.name = emoji.name;
        this.roles = emoji.roles;
        this.user = emoji.user;
    }

    async get(guildId: string) {
        const path = `/guilds/${guildId}/emojis/${this.id}`;
        const response = await RequestUtil.request(path);
    }

    async create(guildId: string) {
        const path = `/guilds/${guildId}/emojis`;
        let params: { name?: string; image?: ImageData; roles?: string[] };
        const response = await RequestUtil.request(path);
    }
}
