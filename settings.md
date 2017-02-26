# GitBook配置
记录Gitbook的一些配置信息

* [title - 标题](#title)
* [author - 作者信息](#author)
* [description - 书本描述](#description)
* [language - 使用的语言](#language)
* [gitbook - 指定gitbook版本](#gitbook)
* [root - 指定存放 GitBook 文件的根目录](#root)
* [links - 在侧边栏添加链接](#links)
* [styles - 自定义样式](#styles)
* [plugins - 插件](#plugins)
* [pluginsConfig - 插件配置](#pluginsconfig)
* [structure - 设置 Readme, Summary, Glossary等对应的文件](#structure)

## title
设置书本的标题
```json
"title" : "Gitbook Use"
```

## author
作者的相关信息
```json
"author" : "zhangjikai"
```

## description
本书的简单描述
```json
"description" : "记录Gitbook的配置和一些插件的使用"
```

## language
Gitbook使用的语言, 版本2.6.4中可选的语言如下：
```
en, ar, bn, cs, de, en, es, fa, fi, fr, he, it, ja, ko, no, pl, pt, ro, ru, sv, uk, vi, zh-hans, zh-tw
```
配置使用简体中文
```
"language" : "zh-hans",
```
## gitbook
指定使用的gitbook版本
```json
"gitbook" : "3.2.2",
"gitbook" : ">=3.0.0"
```
## root
指定存放 GitBook 文件（除了 book.json）的根目录
```json
"root": "."
```
## links
在左侧导航栏添加链接信息
```json
"links" : {
    "sidebar" : {
        "Home" : "http://zhangjikai.com"
    }
}
```

## styles
自定义页面样式， 默认情况下各generator对应的css文件
```json
"styles": {
    "website": "styles/website.css",
    "ebook": "styles/ebook.css",
    "pdf": "styles/pdf.css",
    "mobi": "styles/mobi.css",
    "epub": "styles/epub.css"
}
```
例如使`<h1> <h2>`标签有下边框， 可以在`website.css`中设置
```css
h1 , h2{
    border-bottom: 1px solid #EFEAEA;
}

```
## plugins
配置使用的插件
```
"plugins": [
    "disqus"
]
```
添加新插件之后需要运行`gitbook install`来安装新的插件  

Gitbook默认带有5个插件：
* highlight
* search
* sharing
* font-settings
* livereload

如果要去除自带的插件， 可以在插件名称前面加`-`
```json
"plugins": [
    "-search"
]
```
## pluginsConfig
配置插件的属性
```json
"pluginsConfig": {
    "fontsettings": {
        "theme": "sepia",
        "family": "serif",
        "size":  1
    }
}
```
## structure
指定 Readme、Summary、Glossary 和 Languages 对应的文件名，下面是这几个文件对应变量以及默认值：

| 变量 | 含义和默认值 |
|:----|:----|
|`structure.readme` | `Readme file name (defaults to README.md)` |
|`structure.summary` | `Summary file name (defaults to SUMMARY.md)`|
|`structure.glossary`| `Glossary file name (defaults to GLOSSARY.md)` |
|`structure.languages`| `Languages file name (defaults to LANGS.md)`|
