import { RequestUtil } from "../utils/requestUtil";

import { IUser } from "../interfaces/IUser";

export class User implements IUser {
    id: string;
    username: string;
    discriminator: string;

    constructor(user: IUser) {
        this.id = user.id;
        this.username = user.username;
        this.discriminator = user.discriminator;
    }

    async getMe() {
        const path = `/users/@me`;
        const response = await RequestUtil.request(path);
    }

    async get() {
        const path = `/users/${this.id}`;
        const response = await RequestUtil.request(path);
    }

    async modify() {
        const path = `/users/${this.id}`;
        let params: { username?: string; avatar?: ImageData };
        const response = await RequestUtil.request(path);
    }

    async getMeGuilds() {
        const path = `/users/@me/guilds`;
        const response = await RequestUtil.request(path);
    }

    async leaveGuild(guildId: string) {
        const path = `/users/@me/guilds/${guildId}`;
        const response = await RequestUtil.request(path);
    }

    async getMeDMs() {
        const path = `/users/@me/channels`;
        const response = await RequestUtil.request(path);
    }

    async createMeDM() {
        const path = `/users/@me/channels`;
        let params: { recipient_id?: string };
        const response = await RequestUtil.request(path);
    }

    async createMeDMGroup() {
        const path = `/users/@me/channels`;
        let params: { access_tokens?: string[]; nicks: [{ string: string }] };
        const response = await RequestUtil.request(path);
    }

    async getConnections() {
        const path = `/users/@me/connections`;
        const response = await RequestUtil.request(path);
    }
}
