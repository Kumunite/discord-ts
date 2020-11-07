import { IRole } from "./IRole";
import { IUser } from "./IUser";

export interface IEmoji {
    id: string;
    name: string;
    roles: IRole[];
    user: IUser[];
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean;
}
