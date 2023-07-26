import Eris from "eris";
import { GetConfig } from "../yaml";
import Logger from "../util/Logger";
import { IBaseCommand } from "../commands/~BaseCommand";

const config = GetConfig();

export default class extends Eris.Client {
    public logger: Logger;

    // Maps
    public commands: Map<string, IBaseCommand>;

    public constructor() {
        super(config.secrets.token, {
            intents: ["all"],
            defaultImageSize: Eris.Constants.ImageSizeBoundaries.MAXIMUM
        });

        this.logger = new Logger();

        this.commands = new Map();
    }
}