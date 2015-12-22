# 配置

### title
设置书本的标题
```json
"title" : "Gitbook Use"
```

### author
作者的相关信息
```json
"author" : "zhangjikai"
```

### description
本书的简单描述
```json
"description" : "记录Gitbook的配置和一些插件的使用"
```

### language
Gitbook使用的语言, 版本2.6.4中可选的语言如下：
```
en, ar, bn, cs, de, en, es, fa, fi, fr, he, it, ja, ko, no, pl, pt, ro, ru, sv, uk, vi, zh-hans, zh-tw
```
配置使用简体中文
```
"language" : "zh-hans",
```

### links
在左侧导航栏添加链接信息
```json
"links" : {
    "sidebar" : {
        "Home" : "http://zhangjikai.com"
    }
}
```

### styles
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
### plugins
配置使用的插件
```
"plugins": [
    "disqus"
]
```
添加新插件之间需要运行`gitbook install`来安装新的插件  

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
### pluginsConfig
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

