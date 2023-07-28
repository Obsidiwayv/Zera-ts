import {BaseCommand} from "../~BaseCommand";
import CommandUtils from "../~CommandUtils";

export = new BaseCommand({
    names: ["avatar", "av"],
    description: "Shows your avatar",
    cooldown: 4000,
    execute({ message, guild, args, responses }) {
        const user = CommandUtils.GetUserFromArgument(guild, args[0]) || message.member;

        if (user === null) {
            return message.channel.createMessage(responses.notFoundResponse("user"));
        }

        return message.channel.createMessage(`${user.id}\n${user.avatarURL}`);
    }
})