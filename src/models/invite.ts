import { RequestUtil } from "../utils/requestUtil";

import { IInvite } from "../interfaces/IInvite";

export class Invite implements IInvite {
    code: string;

    constructor(invite: IInvite) {
        this.code = invite.code;
    }

    async get() {
        const path = `/invites/${this.code}`;
        const response = await RequestUtil.request(path);
    }

    async delete() {
        const path = `/invites/${this.code}`;
        const response = await RequestUtil.request(path);
    }
}
