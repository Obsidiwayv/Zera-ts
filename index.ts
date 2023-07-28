import { BaseCommand } from "./commands/~BaseCommand";
import ZeraClient from "./src/ZeraClient";
import FS from "fs";
import ZeraEvents from "./src/ZeraEvents";

const client = new ZeraClient();

const basePath = "./output/commands";

(async () => {
    try {
        await client.connect();
    } catch {
        client.logger.WriteLog("error", "unable to connect to discord");
    }
    loadCommands();
    new ZeraEvents(client);
})();

function loadCommands() {
    try {
        for (const folder of FS.readdirSync(basePath)) {
            if (!folder.startsWith("~")) {
                for (const file of FS.readdirSync(`${basePath}/${folder}`)) {
                    const command = (require(`./commands/${folder}/${file}`) as BaseCommand);
                    for (const name of command.cd.names) {
                        client.commands.set(name, command.cd);
                        //client.logger.WriteLog("info", `Writing command ${name} to command map`);
                    }
                }
            }
        }
    } catch (error) {
        client.logger.WriteLog("error", `cannot find commands unable to load\n${error}`);
    }
}