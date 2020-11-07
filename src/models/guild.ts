import { GuildFeatures } from "../enums/GuildFeatures";

import { IEmoji } from "../interfaces/IEmoji";
import { IGuild } from "../interfaces/IGuild";
import { IGuildPreview } from "../interfaces/IGuildPreview";

import got from "got";

class Guild implements IGuild {
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
        const { body } = await got.get("https://httpbin.org/anything", {
            json: {
                hello: "world",
            },
            responseType: "json",
        });
    }

    async get(id: string) {
        const path = `/guilds/${id}`;
        const { body } = await got.get("https://httpbin.org/anything", {
            json: {
                hello: "world",
            },
            responseType: "json",
        });
    }

    async getPreview(id: string): Promise<IGuildPreview> {
        const path = `/guilds/${id}/preview`;
        const response = await got.get("https://httpbin.org/anything", {
            json: {
                hello: "world",
            },
            responseType: "json",
        });
        const guildPreview: IGuildPreview = <IGuildPreview>response.body;
        return guildPreview;
    }
}
