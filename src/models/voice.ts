import { IVoice } from "../interfaces/IVoice";
import { RequestUtil } from "../utils/requestUtil";
import { VoiceRegion } from "../interfaces/VoiceRegion";

export class Voice {
    voice: IVoice;

    constructor(voice: IVoice) {
        this.voice = voice;
    }

    async getVoiceRegions() {
        const path = `/voice/regions`;
        const response = await RequestUtil.get(path);
        return <VoiceRegion>response.body;
    }
}
