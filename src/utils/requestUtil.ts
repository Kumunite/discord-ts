import got, { Response } from "got";

export class RequestUtil {
    static baseURL = "";

    static async request(path: string): Promise<Response> {
        const url = `${RequestUtil.baseURL}/${path}`;
        try {
            const response = await got.get(url, {
                responseType: "json",
            });
            return response;
        } catch (error) {
            // TODO handle error
            throw error;
        }
    }
}
