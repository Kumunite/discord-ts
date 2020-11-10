import { IEmoji } from "./IEmoji";

export interface Reaction {
    count: number;
    me: boolean;
    emoji: IEmoji;
}
