import { GuildFeatures } from "../enums/GuildFeatures";

import { IEmoji } from "./IEmoji";

export interface IGuildPreview {
    id: string;
    name: string;
    icon?: string;
    splash?: string;
    discovery_splash?: string;
    emojis: IEmoji[];
    features: GuildFeatures;
    approximate_member_count: number;
    approximate_presence_count: number;
    description?: string;
}
