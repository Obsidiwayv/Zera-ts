import Eris from "eris";
import ZeraClient from "../src/ZeraClient";

export class BaseCommand {
    public constructor(public cd: IBaseCommand) {}
}

export interface IBaseCommand {
    names: string[];
    usage?: string[];
    cooldown: number;
    description: string;
    execute(ctx: IBaseCommandContext): any;
}

export interface IBaseCommandContext {
    message: Eris.Message;
    args: string[];
    client: ZeraClient;
}