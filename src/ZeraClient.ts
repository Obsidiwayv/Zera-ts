import Eris from "eris";
import { GetConfig } from "../yaml";
import Logger from "../util/Logger";

const config = GetConfig();

export default class extends Eris.Client {
    public logger: Logger;

    public constructor() {
        super(config.secrets.token, {
            intents: ["all"],
            defaultImageSize: Eris.Constants.ImageSizeBoundaries.MAXIMUM
        });

        this.logger = new Logger();
    }
}