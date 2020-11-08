import got, { Response } from "got";

export class RequestUtil {
    static baseURL = "https://discord.com/api";
    static imageBaseURL = "https://cdn.discordapp.com/";

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

    static async auth(url: string, query: any) {
        try {
            got(url, { searchParams: query });
        } catch (error) {
            throw error;
        }
    }
}
