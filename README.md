# get language from server


##  使用示例

#### 描述 在webpack配置中添加在插件 在dev 或者 build 时通过接口拉取多语言配置文件并输出到指定目录
```bash
new LanguagePlugin(
      {
        outputFilePath: resolveCurr() + 'lang1/',  //配置输出目录
        outputFiles: [
          { fileName: "ar.js", key: "lang_1" },   //fileName: 输出文件名   key:对应接口的key
          { fileName: "en.js", key: "lang_2" },
        ],
        request: {
          method: "get",
          url: "http://192.168.10.191:8000/api/word/list?current=1&pageSize=500&catId[]=45"
        },
        defaultLanguageKey: "lang_2"  //默认使用的语言key
      },
    )
```
