import { GuildFeatures } from "../enums/GuildFeatures";

import { IEmoji } from "../interfaces/IEmoji";
import { IGuild } from "../interfaces/IGuild";
import { IGuildPreview } from "../interfaces/IGuildPreview";

import { RequestUtil } from "../utils/requestUtil";

export class Guild implements IGuild {
    id: string;
    name: string;
    emojis: IEmoji[];
    features: GuildFeatures;
    approximate_member_count: number;
    approximate_presence_count: number;

    constructor(guild: IGuild) {
        this.id = guild.id;
        this.name = guild.name;
        this.emojis = guild.emojis;
        this.features = guild.features;
        this.approximate_member_count = guild.approximate_member_count;
        this.approximate_presence_count = guild.approximate_presence_count;
    }

    async create() {
        const path = `/guilds`;
        const response = await RequestUtil.request(path);
    }

    async get() {
        const path = `/guilds/${this.id}`;
        const response = await RequestUtil.request(path);
    }

    async getPreview(): Promise<IGuildPreview> {
        const path = `/guilds/${this.id}/preview`;
        const response = await RequestUtil.request(path);
        const guildPreview = <IGuildPreview>response.body;
        return guildPreview;
    }

    async modify(): Promise<IGuild> {
        const path = `/guilds/${this.id}`;
        const response = await RequestUtil.request(path);
        const guild = <IGuild>response.body;
        return guild;
    }

    async delete(): Promise<IGuild> {
        const path = `/guilds/${this.id}`;
        const response = await RequestUtil.request(path);
        const guild = <IGuild>response.body;
        return guild;
    }
}
