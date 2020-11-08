import { IUser } from "./IUser";

export interface ITeamMember {
    membership_state: number;
    permissions: string[];
    team_id: string;
    user: IUser;
}
