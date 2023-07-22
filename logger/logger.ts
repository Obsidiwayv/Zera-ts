interface ILogMethods {
    createlog(level: string, message: string): any;
}

const logger: ILogMethods = require("./Release/logger.node");

export default logger;