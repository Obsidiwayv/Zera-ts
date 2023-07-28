import Eris from "eris";
import ZeraClient from "./ZeraClient";
import { GetConfig } from "../yaml";
import Responses from "./constants/Responses";

export default class ZeraEvents {
    private config = GetConfig();

    public constructor(client: ZeraClient) {

        client.on("messageCreate", (message: any) => this.CatchMessageEvent(message, client));
        client.on("ready", () => this.CatchReady(client));
    }

    public CatchMessageEvent(message: Eris.Message, client: ZeraClient) {
        if (!message.author.bot) {
            if (message.content.startsWith(this.config.commands.prefix)) {
                let args = message.content.slice(this.config.commands.prefix.length).trim().split(" ");
                const command = client.commands.get(args[0]);
                if (command) {
                    args = args.slice(1);

                    command.execute({
                        args,
                        message,
                        client,
                        guild: (<Eris.GuildChannel>message.channel).guild,
                        responses: Responses
                    });
                }
            }
        }
    }

    public CatchReady(client: ZeraClient) {}
}