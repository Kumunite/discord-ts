import { RequestUtil } from "../utils/requestUtil";
import { SessionStartLimit } from "../interfaces/gateway/SessionStartLimit";
import { GatewayPayload } from "../interfaces/gateway/GatewayPayload";
import { GatewayOpcode } from "../enums/gateway/GatewayOpcode";
import { HelloEvent } from "../interfaces/gateway/events/helloEvent";
import { IdentifyEvent } from "../interfaces/gateway/events/identifyEvent";

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

    static async hello() {
        let helloEvent: HelloEvent = {
            heartbeat_interval: 45000,
        };
        let payloads: GatewayPayload = {
            op: GatewayOpcode.hello,
            d: helloEvent,
        };
        const response = await RequestUtil.gateway(payloads);
        return response.data;
    }

    async heartbeat(sequenceNumber?: number) {
        let payloads: GatewayPayload = {
            op: GatewayOpcode.heartbeat,
            d: sequenceNumber ?? null,
        };
        const response = await RequestUtil.gateway(payloads);
        return response.data;
    }

    async identify(event: IdentifyEvent) {
        let payloads: GatewayPayload = {
            op: GatewayOpcode.identify,
            d: event,
        };
        const response = await RequestUtil.gateway(payloads);
        return response.data;
    }

    async resumed() {}
    async reconnected() {}
    async invalidSession() {}
    async createChannel() {}

    async updateChannel() {}
    async deleteChannel() {}
    async pinChannelUpdate() {}

    async createGuild() {}
    async updateGuild() {}
    async deleteGuild() {}
    async addBan() {}
    async removeBan() {}
    async updateEmoji() {}
    async updateIntegration() {}
    async addMember() {}
    async removeMember() {}
    async updateMember() {}
    async memberChunk() {}
    async createRole() {}
    async updateRole() {}
    async deleteRole() {}

    async createInvite() {}
    async deleteInvite() {}

    async createMessage() {}
    async updateMessage() {}
    async deleteMessageBulk() {}
    async addMessageReaction() {}
    async removeMessageReaction() {}
    async removeAllMessageReactions() {}
    async removeMessageReactionEmoji() {}

    async updatePresence() {}
    async typingStart() {}
    async userUpdate() {}
    async voiceStateUpdate() {}
    async voiceServerUpdate() {}
    async webhooksUpdate() {}

    static async getGatewayURL() {
        const path = `gateway`;
        const response = await RequestUtil.get(path);
        type body = { url: string };
        return (<body>response.data).url;
    }

    /*
     * This endpoint requires authentication using a valid bot token.
     * */
    static async getGatewayBot() {
        const path = `gateway/bot`;
        const response = await RequestUtil.get(path);
        type body = { url: string; shards: string; session_start_limit: SessionStartLimit };
        return <body>response.data;
    }
}
