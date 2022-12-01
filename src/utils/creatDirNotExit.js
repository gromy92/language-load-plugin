const shell = require('shelljs');
const exists = require('fs').existsSync

module.exports = creatDirNotExit = (outputFilePath, pluginName,logger) => {
    if (!exists(outputFilePath)) {
        shell.mkdir("-p", outputFilePath);
        logger.info(`${pluginName}: ${outputFilePath} not exit cerated`);
    }
}