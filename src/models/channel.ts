import { RequestUtil } from "../utils/requestUtil";

import { IChannel } from "../interfaces/IChannel";

export class Channel implements IChannel {
    id: string;
    type: number;

    constructor(channel: IChannel) {
        this.id = channel.id;
        this.type = channel.type;
    }

    async get() {
        const path = `/channels/${this.id}`;
        const response = await RequestUtil.request(path);
    }

    async modify() {
        const path = `/channels/${this.id}`;
        const response = await RequestUtil.request(path);
    }
}
