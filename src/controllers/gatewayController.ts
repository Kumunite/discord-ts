import { RequestUtil } from "../utils/requestUtil";
import { SessionStartLimit } from "../interfaces/gateway/SessionStartLimit";
import { GatewayPayload } from "../interfaces/gateway/GatewayPayload";
import { GatewayOpcode } from "../enums/gateway/GatewayOpcode";
import { HelloEvent } from "../interfaces/gateway/events/helloEvent";
import { ReadyEvent } from "../interfaces/gateway/events/readyEvent";

export class GatewayController {
    baseURL = `wss://gateway.discord.gg/`;

    connect() {
        let version = 8;
        let encoding = "json";
        let compress = "zlib-stream";
        RequestUtil.auth(this.baseURL, {
            version,
            encoding,
            compress,
        });
    }

    hello() {
        let helloEvent: HelloEvent = {
            heartbeat_interval: 45000,
        };
        let payloads: GatewayPayload = {
            op: GatewayOpcode.hello,
            d: helloEvent,
        };
    }

    ready() {
        let readyEvent: ReadyEvent;
        let payloads: GatewayPayload = {
            op: GatewayOpcode.hello,
            d: readyEvent,
        };
    }

    resumed() {}
    reconnected() {}
    invalidSession() {}
    createChannel() {}

    updateChannel() {}
    deleteChannel() {}
    pinChannelUpdate() {}

    createGuild() {}
    updateGuild() {}
    deleteGuild() {}
    addBan() {}
    removeBan() {}
    updateEmoji() {}
    updateIntegration() {}
    addMember() {}
    removeMember() {}
    updateMember() {}
    memberChunk() {}
    createRole() {}
    updateRole() {}
    deleteRole() {}

    createInvite() {}
    deleteInvite() {}

    createMessage() {}
    updateMessage() {}
    deleteMessageBulk() {}
    addMessageReaction() {}
    removeMessageReaction() {}
    removeAllMessageReactions() {}
    removeMessageReactionEmoji() {}

    updatePresence() {}
    typingStart() {}
    userUpdate() {}
    voiceStateUpdate() {}
    voiceServerUpdate() {}
    webhooksUpdate() {}

    async getGateway() {
        const path = `/gateway`;
        const response = await RequestUtil.request(path);
        type T = { url: string };
    }

    async getGatewayBot() {
        const path = `/gateway/bot`;
        const response = await RequestUtil.request(path);
        type T = { url: string; shards: string; session_start_limit: SessionStartLimit };
    }
}
