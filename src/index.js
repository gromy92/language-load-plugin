const { validate } = require("schema-utils")
const schemaOption = require("./schema")
const axiosRequest = require("./request")

const creatDirNotExit = require('./utils/creatDirNotExit');
const outputFile = require('./utils/outputFile');

//
class LanguagePlugin {
    static defaultOptions = {
        request: {
            method: "get"
        }
    };
    constructor(options = {}) {
        this.pluginName = LanguagePlugin.name;
        this.options = { ...LanguagePlugin.defaultOptions, ...options };
        validate(schemaOption(this.pluginName), options);
    }
    apply(compiler) {
        compiler.hooks.emit.tapPromise(this.pluginName, (compilation) => {
            const { outputFilePath, request, defaultLanguageKey, outputFiles } = this.options
            const logger = compilation.getLogger(this.pluginName);
            creatDirNotExit(outputFilePath, this.pluginName, logger)
            return new Promise((resolve, reject) => {
                axiosRequest(request).then((data) => {
                    outputFile(outputFilePath, defaultLanguageKey, outputFiles, data)
                    resolve()
                }, (error) => {
                    logger.error(error)
                    reject(error)
                })
            })

        });
    }
}

module.exports = LanguagePlugin