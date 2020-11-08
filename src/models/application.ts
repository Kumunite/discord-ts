import { RequestUtil } from "../utils/requestUtil";
import { IApplication } from "../interfaces/IApplication";

export class Application implements IApplication {
    description: string;
    icon: string;
    id: string;
    name: string;
    summary: string;

    constructor(application: IApplication) {
        this.description = application.description;
        this.icon = application.icon;
        this.id = application.id;
        this.name = application.name;
        this.summary = application.summary;
    }

    async get() {
        const path = `/oauth2/applications/@me`;
        const response = await RequestUtil.request(path);
    }
}
