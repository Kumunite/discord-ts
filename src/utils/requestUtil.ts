import { Constants } from "../constants";

import got, { Response } from "got";

export class RequestUtil {
    static async get(path: string): Promise<Response<any>> {
        const url = `${Constants.baseUrl}/${path}`;
        try {
            const response = await got.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async patch(path: string, body: any): Promise<Response<any>> {
        const url = `${Constants.baseUrl}/${path}`;
        try {
            const response = await got.patch(url, { body });
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async post(path: string, body: any): Promise<Response<any>> {
        const url = `${Constants.baseUrl}/${path}`;
        try {
            const response = await got.post(url, { body });
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async put(path: string, body: any): Promise<Response<any>> {
        const url = `${Constants.baseUrl}/${path}`;
        try {
            const response = await got.put(url, { body });
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async delete(path: string): Promise<Response<any>> {
        const url = `${Constants.baseUrl}/${path}`;
        try {
            const response = await got.delete(url);
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

    static async query(url: string, query: object): Promise<Response<any>> {
        try {
            const response = await got.get(url, { query });
            return response;
        } catch (error) {
            throw error;
        }
    }
}
