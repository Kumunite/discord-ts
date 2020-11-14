import { GatewayController } from "./../controllers/gatewayController";

import { Constants } from "../constants";

test("Get the gateway URL", async () => {
    let URL = await GatewayController.getGatewayURL();
    expect(URL).toBe(Constants.gatewayBaseURL);
});
