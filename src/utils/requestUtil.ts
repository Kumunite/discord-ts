import { Constants } from "../constants";

import got, { Response } from "got";

export class RequestUtil {
    static async request(path: string): Promise<Response<any>> {
        const url = `${Constants.baseUrl}/${path}`;
        try {
            const response = await got.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async auth(url: string, query: any) {
        try {
            got(url, { query });
        } catch (error) {
            throw error;
        }
    }

    static async query(url: string, query: object) {
        try {
            return got.get(url, { query });
        } catch (error) {
            throw error;
        }
    }
}
