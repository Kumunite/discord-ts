import { IUser } from "../../IUser";
import { IGuild } from "../../IGuild";

export interface ReadyEvent {
    v: number;
    user: IUser;
    private_channels: any[];
    guilds: IGuild[];
    session_id: string;
    shard?: number[];
}
