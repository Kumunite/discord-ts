import { DiscordError } from "./DiscordError";

export interface ObjectError {
    code: number;
    errors: {
        access_token: DiscordError[];
    };
    message: string;
}
