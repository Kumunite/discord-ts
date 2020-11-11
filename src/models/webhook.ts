import { IWebhook } from "../interfaces/IWebhook";
import { RequestUtil } from "../utils/requestUtil";
import { Embed } from "../interfaces/embed/Embed";
import { AllowedMention } from "../interfaces/AllowedMention";

export class Webhook {
    webhook: IWebhook;

    constructor(webhook: IWebhook) {
        this.webhook = webhook;
    }

    async getChannelWebhook(channelId: string) {
        const path = `/channels/${channelId}/webhooks`;
        const response = await RequestUtil.get(path);
        return <IWebhook[]>response.body;
    }

    async getGuildWebhook(guildId: string) {
        const path = `/guilds/${guildId}/webhooks`;
        const response = await RequestUtil.get(path);
        return <IWebhook[]>response.body;
    }

    async get() {
        const path = `/webhooks/${this.webhook.id}`;
        const response = await RequestUtil.get(path);
        return <IWebhook>response.body;
    }

    async getWithToken() {
        const path = `/webhooks/${this.webhook.id}/${this.webhook.token}`;
        const response = await RequestUtil.get(path);
        return <IWebhook>response.body;
    }

    async modify() {
        const path = `/webhooks/${this.webhook.id}`;
        type body = { name: string; avatar?: ImageData; channel_id: string };
        const response = await RequestUtil.patch(path, <body>{});
        return <IWebhook>response.body;
    }

    async modifyWithToken() {
        const path = `/webhooks/${this.webhook.id}/${this.webhook.token}`;
        type body = { name: string; avatar?: ImageData; channel_id: string };
        const response = await RequestUtil.patch(path, <body>{});
        return <IWebhook>response.body;
    }

    async delete() {
        const path = `/webhooks/${this.webhook.id}`;
        const response = await RequestUtil.delete(path);
        return <IWebhook>response.body;
    }

    async deleteWithToken() {
        const path = `/webhooks/${this.webhook.id}/${this.webhook.token}`;
        const response = await RequestUtil.delete(path);
        return <IWebhook>response.body;
    }

    async execute() {
        const path = `/webhooks/${this.webhook.id}/${this.webhook.token}`;
        type body = {
            content: string;
            username: string;
            avatar_url: string;
            tts: boolean;
            file: any;
            embeds: Embed[];
            payload_json: string;
            allowed_mentions: AllowedMention;
        };
        const response = await RequestUtil.post(path, <body>{});
        return response.body;
    }

    async executeSlackCompatibleWebhook() {
        const path = `/webhooks/${this.webhook.id}/${this.webhook.token}/slack`;
        type body = {};
        const response = await RequestUtil.post(path, <body>{});
        return response.body;
    }

    async executeGithubCompatibleWebhook() {
        const path = `/webhooks/${this.webhook.id}/${this.webhook.token}/github`;
        type body = {};
        const response = await RequestUtil.post(path, <body>{});
        return response.body;
    }
}
