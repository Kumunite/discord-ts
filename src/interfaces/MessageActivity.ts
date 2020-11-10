import { MessageActivityType } from "../enums/MessageActivityType";

export interface MessageActivity {
    type: MessageActivityType;
    party_id?: string;
}
