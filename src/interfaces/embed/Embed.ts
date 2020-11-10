import { EmbedType } from "../../enums/EmbedType";
import { EmbedFooter } from "./EmbedFooter";
import { EmbedImage } from "./EmbedImage";
import { EmbedThumbnail } from "./EmbedThumbnail";
import { EmbedVideo } from "./EmbedVideo";
import { EmbedProvider } from "./EmbedProvider";
import { EmbedAuthor } from "./EmbedAuthor";
import { EmbedField } from "./EmbedField";

export interface Embed {
    title?: string;
    type?: EmbedType;
    description?: string;
    url?: string;
    timestamp?: Date;
    color?: number;
    footer?: EmbedFooter;
    image?: EmbedImage;
    thumbnail?: EmbedThumbnail;
    video?: EmbedVideo;
    provider?: EmbedProvider;
    author?: EmbedAuthor;
    fields?: EmbedField[];
}
