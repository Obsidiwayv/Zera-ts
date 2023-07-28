import Eris from "eris";

export default class CommandUtils {
    public static GetUserFromArgument(guild: Eris.Guild, args: string) {
        return guild.members.find((user) => user.id === this.ReplaceKeys(args)) ||
               guild.members.find((user) => user.username === args) ||
               guild.members.find((user) => `${user.username}#${user.discriminator}` === args);
    }

    private static ReplaceKeys(arg: string) {
        const keys = [
            "<",
            "#",
            "!",
            "@",
            ">"
        ];
        for (const v of keys) {
            arg = arg.replace(v, " ").trim();
        }
        return arg;
    }
}