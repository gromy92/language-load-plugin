module.exports = schemaOption = (pluginName) => {
    const desctription = "Check the configuration items of"
    return {
        "type": "object",
        "properties": {
            "outputFilePath": {
                "description": `${pluginName}- ${desctription} outputFilePath`,
                "type": "string"
            },
            'outputFiles':{
                "description": `${pluginName}- ${desctription} outputFiles`,
                "type": "array"
            },
            "request": {
                "url": {
                    "description": `${pluginName}- ${desctription} request.url`,
                    "type": "string"
                },
                "method": {
                    "description": `${pluginName}- ${desctription} request.method`,
                    "type": "string"
                },
                "params": {
                    "description": `${pluginName}- ${desctription} request.params`,
                    "type": "object"
                }
            },
            "defaultLanguageKey": {
                "description": `${pluginName}- ${desctription} defaultLanguageKey`,
                "type": "string"
            },
        },
        "required": ["outputFilePath", "request"],
        "additionalProperties": false
    }

}