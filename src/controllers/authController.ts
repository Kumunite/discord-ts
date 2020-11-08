import { OAuth2Scopes } from "../enums/OAuth2Scopes";
import { RequestUtil } from "../utils/requestUtil";
import got from "got";

export class AuthController {
    baseAuthURL = "https://discord.com/api/oauth2/authorize";
    tokenURL = "https://discord.com/api/oauth2/token";
    revocationURL = "https://discord.com/api/oauth2/token/revoke";

    clientId = "";
    clientSecret = "";
    redirectURI = "";

    auth(token: string) {
        let scopes: string[] = [OAuth2Scopes.identify, OAuth2Scopes.guildsJoin];
        RequestUtil.auth(this.baseAuthURL, {
            response_type: "code",
            client_id: "",
            scope: scopes.reduce((previousValue, currentValue) => `${previousValue}%20${currentValue}`),
            state: "", //state could be a hash of the user's session cookie, or some other nonce that can be linked to the user's session.
            redirect_uri: "",
            prompt: "consent",
        });
    }

    async exchangeCode(code: string) {
        const { body } = await got.post("https://httpbin.org/anything", {
            json: {
                client_id: this.clientId,
                client_secret: this.clientSecret,
                grant_type: "authorization_code",
                code: code,
                redirect_uri: this.redirectURI,
                scope: "identify email connections",
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            responseType: "json",
        });
    }

    async refreshToken(refreshToken: string) {
        const { body } = await got.post("https://httpbin.org/anything", {
            json: {
                client_id: this.clientId,
                client_secret: this.clientSecret,
                grant_type: "refresh_token",
                refresh_token: refreshToken,
                redirect_uri: this.redirectURI,
                scope: "identify email connections",
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            responseType: "json",
        });
    }

    async clientCredentialsGrant() {
        const { body } = await got.post(this.tokenURL, {
            json: {
                grant_type: "client_credentials",
                scope: "identify email connections",
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            responseType: "json",
        });
    }

    async authBot() {
        const { body } = await got.post(this.baseAuthURL, {
            json: {
                client_id: this.clientId,
                permissions: this.clientSecret,
                guild_id: "",
                disable_guild_select: true,
                scope: "identify email connections",
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            responseType: "json",
        });
    }

    webhooks(token: string) {
        RequestUtil.auth(this.baseAuthURL, {
            response_type: "code",
            client_id: "",
            scope: OAuth2Scopes.webhookIncoming,
            state: "",
            redirect_uri: "",
        });
    }
}
