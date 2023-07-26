import YAML from "yaml";
import fs from "fs";

export interface IConfig {
    secrets: {
        token: string
    };
    commands: {
        prefix: string;
    };
};

export function GetConfig(): IConfig {
    return YAML.parse(fs.readFileSync("./config.yaml", "utf-8"));
}