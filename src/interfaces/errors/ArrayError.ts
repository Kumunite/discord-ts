import { DiscordError } from "./DiscordError";

export interface ArrayError {
    code: number;
    errors: {
        activities: { platform: DiscordError[]; type: DiscordError[] }[];
    };
    message: string;
}
