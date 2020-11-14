import { GatewayController } from "../controllers/gatewayController";
import { Constants } from "../constants";

// @ts-ignore
import Axios, { AxiosResponse } from "axios";
import { stringify } from "qs";

export class RequestUtil {
    static async get(path: string): Promise<AxiosResponse<any>> {
        const url = `${Constants.baseUrl}/${path}`;
        try {
            const response = await Axios.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async patch(path: string, body: any): Promise<AxiosResponse<any>> {
        const url = `${Constants.baseUrl}/${path}`;
        try {
            const response = await Axios.patch(url, { body });
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async post(path: string, body: any): Promise<AxiosResponse<any>> {
        const url = `${Constants.baseUrl}/${path}`;
        try {
            const response = await Axios.post(url, { body });
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async put(path: string, body: any): Promise<AxiosResponse<any>> {
        const url = `${Constants.baseUrl}/${path}`;
        try {
            const response = await Axios.put(url, { body });
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async delete(path: string): Promise<AxiosResponse<any>> {
        const url = `${Constants.baseUrl}/${path}`;
        try {
            const response = await Axios.delete(url);
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async auth(url: string, query: any) {
        try {
            let queryString = stringify(query);
            const response = await Axios.get(url, { params: queryString });
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async query(url: string, query: object): Promise<AxiosResponse<any>> {
        try {
            let queryString = stringify(query);
            const response = await Axios.get(url, { params: queryString });
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async gateway(body: any): Promise<AxiosResponse<any>> {
        try {
            let query = { v: Constants.gatewayVersion, encoding: "json" };
            let queryString = stringify(query);
            const response = await Axios.post(Constants.gatewayBaseURL, { params: queryString, body });
            return response;
        } catch (error) {
            let url = await GatewayController.getGatewayURL();
            Constants.gatewayBaseURL = url;
            throw error;
        }
    }
}
