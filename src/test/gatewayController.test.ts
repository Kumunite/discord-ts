import { GatewayController } from "./../controllers/gatewayController";

import { Constants } from "../constants";

describe("# Web Socket", () => {
    // test("Send Hello", async () => {
    //     let hello = await GatewayController.hello();
    //     expect(hello).toBe(Constants.gatewayBaseURL);
    // });
});

describe("# Requests", () => {
    test("Get the gateway URL", async () => {
        let URL = await GatewayController.getGatewayURL();
        expect(URL).toBe(Constants.gatewayBaseURL);
    });

    // test("Get the gateway bot", async () => {
    //     let bot = await GatewayController.getGatewayBot();
    //     expect(bot.url).toBe(Constants.gatewayBaseURL);
    // });
});
