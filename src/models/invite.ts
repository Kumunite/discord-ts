import { RequestUtil } from "../utils/requestUtil";

import { IInvite } from "../interfaces/IInvite";

export class Invite {
    invite: IInvite;

    constructor(invite: IInvite) {
        this.invite = invite;
    }

    async get() {
        const path = `/invites/${this.invite.code}`;
        const response = await RequestUtil.get(path);
        return <IInvite>response.body;
    }

    async delete() {
        const path = `/invites/${this.invite.code}`;
        const response = await RequestUtil.delete(path);
        return <IInvite>response.body;
    }
}
