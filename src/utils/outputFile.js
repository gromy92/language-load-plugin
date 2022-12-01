const fs = require('fs');

module.exports = outputFile = (outputFilePath, defaultLanguageKey, outputFileOption, data) => {
    writeToDisk(generateFileList(outputFileOption, data, defaultLanguageKey), outputFilePath)
}


const writeToDisk = (fileList, outputFilePath) => {
    fileList.map(item => {
        fs.writeFileSync(`${outputFilePath}${item.fileName}`, item.content, 'utf-8');
    })
}

const generateFileList = (outputFileOption, data, defaultLanguageKey) => {
    const result = [...outputFileOption]
    result.map(lang => {
        lang.content = "export default {\n" +
            data.map((word) => getLangContent(word, lang.key, defaultLanguageKey))
                .join('\n') +
            "\n}";
    })
    return result
}

const getLangContent = (word, langkey, defaultLanguageKey) => {
    const value = word[langkey] || word[defaultLanguageKey] || ""
    return `    "${word.word_key}":"${value}",`
}