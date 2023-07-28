import { BaseCommand } from "../~BaseCommand";

export = new BaseCommand({
    names: ["ping"],
    description: "Pings the bot",
    cooldown: 3000,
    execute({ message }) {
        const now = Date.now();

        message.channel.createMessage("ping?")
            .then(async (msg) => {
                const diff = (Date.now() - now);

                await msg.edit(`\`${diff}\`ms`);
            });
    },
})