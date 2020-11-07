import { Visibility } from "../enums/Visibility";

export interface IConnection {
    id: string;
    name: string;
    type: string;
    revoked?: boolean;
    integrations?: boolean;
    verified: boolean;
    friend_sync: boolean;
    show_activity: boolean;
    visibility: Visibility;
}
