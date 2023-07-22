import ZeraClient from "./src/ZeraClient";

const client = new ZeraClient();

(async () => {
    try {
        await client.connect();
    } catch {
        client.logger.WriteLog("error", "unable to connect to discord");
    };
})();