import { RequestUtil } from "../utils/requestUtil";
import { ITemplate } from "../interfaces/ITemplate";

export class Template {
    template: ITemplate;

    constructor(template: ITemplate) {
        this.template = template;
    }

    async get() {
        const path = `/guilds/templates/${this.template.code}`;
        const response = await RequestUtil.get(path);
        return <ITemplate>response.body;
    }

    async create() {
        // This endpoint can be used only by bots in less than 10 guilds.
        const path = `/guilds/templates/${this.template.code}`;
        type body = { name: string; icon?: ImageData };
        const response = await RequestUtil.post(path, <body>{});
        return <ITemplate>response.body;
    }
}
