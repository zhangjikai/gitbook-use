## 插件
记录一些实用的插件
### Disqus
添加disqus评论

[插件地址](https://plugins.gitbook.com/plugin/disqus)
 ```json
"plugins": [
    "disqus"
],
"pluginsConfig": {
    "disqus": {
        "shortName": "gitbookuse"
    }
}
```

### Search Pro
支持中文搜索, 需要将默认的search插件去掉, :worried: 在window下安装该插件时总是出错 :worried:   
[插件地址](https://plugins.gitbook.com/plugin/search-pro)
```json
"plugins": [
    "-search",
    "search-pro"
],
"pluginsConfig": {
    "search-pro": {
        "cutWordLib": "nodejieba",
        "defineWord" : ["Gitbook Use"]
    }
}
```

### Advanced Emoji
支持emoji表情  
[emoij表情列表](http://www.emoji-cheat-sheet.com/)  
[插件地址](https://plugins.gitbook.com/plugin/advanced-emoji)
```json
"plugins": [
    "advanced-emoji"
]
```
使用示例:   
:bowtie: :smile: :laughing: :blush: :smiley: :relaxed: 

### Github
添加github图标  
[插件地址](https://plugins.gitbook.com/plugin/github)
```json
"plugins": [ 
    "github" 
],
"pluginsConfig": {
    "github": {
        "url": "https://github.com/zhangjikai"
    }
}
```

### Ace Plugin
使gitbook支持ace  
[插件地址](https://plugins.gitbook.com/plugin/ace)

```json
"plugins": [
    "ace"
]
```
使用示例:

{%ace edit=true, lang='c_cpp'%}
// This is a hello world program for C.
#include <stdio.h>

int main(){
  printf("Hello World!");
  return 1;
}
{%endace%}

### Emphasize
为文字加上底色  
[插件地址](https://plugins.gitbook.com/plugin/emphasize)
```json
"plugins": [
    "emphasize"
]
```
使用示例: 

This text is {% em %}highlighted !{% endem %}

This text is {% em %}highlighted with **markdown**!{% endem %}

This text is {% em type="green" %}highlighted in green!{% endem %}

This text is {% em type="red" %}highlighted in red!{% endem %}

This text is {% em color="#ff0000" %}highlighted with a custom color!{% endem %}

### KaTex
为了支持数学公式, 我们可以使用`KaTex`和`MathJax`插件, 官网上说`Katex`速度要快于`MathJax`  
[插件地址](https://plugins.gitbook.com/plugin/katex)  
[MathJax使用LaTeX语法编写数学公式教程](http://iori.sinaapp.com/17.html)
```json
"plugins": [
    "katex"
]
```
使用示例:

When {% math %}a \ne 0{% endmath %}, there are two solutions to {% math %}(ax^2 + bx + c = 0){% endmath %} and they are {% math %}x = {-b \pm \sqrt{b^2-4ac} \over 2a}.{% endmath %}

$$
\int_{-\infty}^\infty g(x) dx
$$

$$
1 \over 3
$$

### Include Codeblock
使用代码块的格式显示所包含文件的内容. 该文件必须存在.  
[插件地址](https://plugins.gitbook.com/plugin/include-codeblock)  
```json
"plugins": [
    "include-codeblock"
]
```
使用示例:

[import](styles/website.css)

### Splitter
使侧边栏的宽度可以自由调节  
![](https://raw.githubusercontent.com/yoshidax/gitbook-plugin-splitter/master/gitbook-splitter-demo.gif)  
[插件地址](https://plugins.gitbook.com/plugin/splitter)
```json
"plugins": [
    "splitter"
]
```

### Mermaid
支持渲染[Mermaid](https://github.com/knsv/mermaid)图表  
[插件地址](https://plugins.gitbook.com/plugin/mermaid)
```json
"plugins": [
    "mermaid"
]
```
使用示例: 
{% mermaid %}
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
{% endmermaid %}

### Sharing
分享当前页面, gitbook的默认插件, 使用下面方式来禁用
```json
 plugins: ["-sharing"]
```
配置:

```json
"pluginsConfig": {
    "sharing": {
        "weibo": true,
        "facebook": true,
        "twitter": true,
        "google": false,
        "instapaper": false,
        "vk": false,
        "all": [
            "facebook", "google", "twitter",
                "weibo", "instapaper"
        ]
    }
}
```

### Tbfed-pagefooter
为页面添加页脚  
[插件地址](https://plugins.gitbook.com/plugin/tbfed-pagefooter)
```json
"plugins": [
   "tbfed-pagefooter"
],
"pluginsConfig": {
    "tbfed-pagefooter": {
        "copyright":"Copyright &copy zhangjikai.com 2015",
        "modify_label": "该文件修订时间：",
        "modify_format": "YYYY-MM-DD HH:mm:ss"
    }
}

```

### Toggle Chapters
是左侧的章节目录可以折叠  
[插件地址](https://plugins.gitbook.com/plugin/toggle-chapters) 
```json
"plugins": ["toggle-chapters"]
```


### Sectionx
将页面分块显示  
[插件地址](https://plugins.gitbook.com/plugin/sectionx)  
```json
"plugins": [
   "sectionx"
]
```
使用示例

<!--sec data-title="Sectionx Demo" data-id="section0" data-show=true ces-->

Insert markdown content here (you should start with h3 if you use heading).  
本段代码
```md
<!--sec data-title="Introduction" data-id="section0" data-show=true ces-->
Insert markdown content here (you should start with h3 if you use heading).
<!--endsec-->`

```

<!--endsec-->

### Codeblock-filename
为代码块添加文件名称  
[插件地址](https://plugins.gitbook.com/plugin/codeblock-filename)
```json
plugins: [ "codeblock-filename" ] 
```
使用示例:  
```:helloworld
helloworld
```
```js:test.js
console.log("test");
```
### ga
google 统计  
[插件地址](https://plugins.gitbook.com/plugin/ga)
```json
"plugins": [
    "ga"
 ],
"pluginsConfig": {
    "ga": {
        "token": "UA-XXXX-Y"
    }
}
```

### baidu
百度统计  
[插件地址](https://plugins.gitbook.com/plugin/baidu)
```json
"plugin": [
    "baidu"
 ],
"pluginsConfig": {
    "baidu": {
        "token": "YOUR TOKEN"
    }
}
```





