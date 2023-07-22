import fs from "fs";
import crypto from "crypto";

export default class {
    private logdir: string = "./logs";
    private addr: string;
    
    public constructor() {
        this.addr = crypto.randomUUID();
    }

    public WriteLog(level: string, message: string) {
        const data = `[${level.toUpperCase()}] >> ${message}\n`;
        try {
            fs.writeFileSync(`${this.logdir}/log-${this.addr}.txt`, message);
        } catch (err) {
            console.log("Unable to write to file: " + err);
        }
    }

    public ViewLogFileCount() {
        return fs.readdirSync(this.logdir).length;
    }
}