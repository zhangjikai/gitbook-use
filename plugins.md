# GitBook 插件
<!--email_off-->  
记录一些实用的插件, 如果要指定插件的版本可以使用 `plugin@0.3.1`。下面的插件在 GitBook 的 `3.2.3` 版本中可以正常工作，因为一些插件可能不会随着 GitBook 版本的升级而升级，即下面的插件可能不适用高版本的 GitBook，所以这里指定了 GitBook 的版本。另外本文记录的插件在 Linux 下都是可以正确工作的，windows 系统没有测试。这里只是列举了一部分插件，如果有其它的需求，可以到 [插件官网](https://plugins.gitbook.com/) 区搜索相关插件。
<!--/email_off-->

- [Disqus - Disqus 评论](#disqus)
- [Search Plus - 支持中文搜索](#search-plus)
- [Prsim - 使用 Prism.js 高亮代码](#prsim)
- [Advanced Emoji - 支持 emoji 表情](#advanced-emoji)
- [Github - 添加github图标](#github)
- [Github Buttons - 添加项目在 Github 上的 star、fork、watch 信息](#github-buttons)
- [Ace Plugin - 支持ace](#ace-plugin)
- [Emphasize - 为文字加上底色](#emphasize)
- [KaTex - 支持数学公式](#katex)
- [Include Codeblock - 用代码块显示包含文件的内容](#include-codeblock)
- [Splitter - 使侧边栏的宽度可以自由调节](#splitter)
- [Mermaid-gb3 - 支持渲染 Mermaid 图表](#mermaid-gb3)
- [Puml - 支持渲染 uml 图 ](#puml)
- [Graph - 使用 function-plot 绘制数学函数图](#graph)
- [Chart  - 绘制图形](#chart)
- [Sharing-plus - 分享当前页面](#sharing-plus)
- [Tbfed-pagefooter - 为页面添加页脚](#tbfed-pagefooter)
- [Expandable-chapters-small - 使左侧的章节目录可以折叠](#expandable-chapters-small)
- [Toggle-chapters - 左侧章节目录可以折叠](#Toggle-chapters)
- [Sectionx - 将页面分块显示](#sectionx)
- [GA - Google 统计](#ga)
- [3-ba - 百度统计](#3-ba)
- [Donate - 打赏插件](#donate)
- [Local Video - 使用 Video.js 播放本地视频](#local-video)
- [Simple-page-toc - 自动生成本页的目录结构](#simple-page-toc)
- [Anchors - 添加 Github 风格的锚点](#anchors)
- [Anchor-navigation-ex - 添加Toc到侧边悬浮导航以及回到顶部按钮](#anchor-navigation-ex)
- [Edit Link - 链接到当前页源文件上](#edit-link)
- [Sitemap-general - 生成sitemap](#sitemap-general)
- [Favicon - 更改网站的 favicon.ico](#favicon)
- [Todo - 添加 Todo 功能](#todo)
- [Terminal - 模拟终端样式](#terminal)
- [Copy-code-button - 为代码块添加复制按钮](#copy-code-button)
- [Alerts - 添加不同 alerts 样式的 blockquotes](#alerts)
- [Include-csv - 显示 csv 文件内容](#include-csv)
- [Musicxml - 支持 musicxml 格式的乐谱渲染](#musicxml)
- [Klipse - 集成 Kplise (online code evaluator)](#klipse)
- [Versions-select - 添加版本选择的下拉菜单](#versions-select)
- [Rss - 添加 rss 订阅功能](#rss)
- [Theme-comscore - 修改标题和表格颜色](#theme-comscore)
- [summary - 自动生成目录](#summary)

## Disqus

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

## Search Plus
支持中文搜索, 需要将默认的 `search` 和 `lunr` 插件去掉。  

[插件地址](https://plugins.gitbook.com/plugin/search-plus)

```json
{
    "plugins": ["-lunr", "-search", "search-plus"]
}
```

## Prism
使用 `Prism.js` 为语法添加高亮显示，需要将 `highlight` 插件去掉。该插件自带的主题样式较少，可以再安装 `prism-themes` 插件，里面多提供了几种样式，具体的样式可以参考 [这里](https://github.com/PrismJS/prism-themes)，在设置样式时要注意设置 css 文件名，而不是样式名。

[Prism 插件地址](https://plugins.gitbook.com/plugin/prism) &nbsp;&nbsp; [prism-themes 插件地址](https://plugins.gitbook.com/plugin/prism-themes)

```json
{
    "plugins": [
        "prism",
        "-highlight"
    ],
    "pluginsConfig": {
        "prism": {
            "css": [
                "prism-themes/themes/prism-base16-ateliersulphurpool.light.css"
            ]
        }
    }
}
```
如果需要修改背景色、字体大小等，可以在 `website.css` 定义 `pre[class*="language-"]` 类来修改，下面是一个示例：
```css
pre[class*="language-"] {
    border: none;
    background-color: #f7f7f7;
    font-size: 1em;
    line-height: 1.2em;
}
```
## Advanced Emoji
支持emoji表情

[emoij表情列表](http://www.emoji-cheat-sheet.com/)  
[插件地址](https://plugins.gitbook.com/plugin/advanced-emoji)

```json
"plugins": [
    "advanced-emoji"
]
```
使用示例：

:bowtie: :smile: :laughing: :blush: :smiley: :relaxed:

## Github
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
## Github Buttons
添加项目在 github 上的 star，watch，fork情况

[插件地址](https://plugins.gitbook.com/plugin/github-buttons)

```json
{
    "plugins": [
        "github-buttons"
    ],
    "pluginsConfig": {
        "github-buttons": {
            "repo": "zhangjikai/gitbook-use",
            "types": [
                "star",
                "watch",
                "fork"
            ],
            "size": "small"
        }
    }
}
```

## Ace Plugin

[插件地址](https://plugins.gitbook.com/plugin/ace)  

使 GitBook 支持ace 。默认情况下，line-height 为 1，会使代码显得比较挤，而作者好像没提供修改行高的选项，如果需要修改行高，可以到 `node_modules -> github-plugin-ace -> assets -> ace.js` 中加入下面两行代码 (30 行左右的位置)：
```js
editor.container.style.lineHeight = 1.25;
editor.renderer.updateFontSize();
```
不过上面的做法有个问题就是，每次使用 `gitbook install` 安装新的插件之后，代码又会重置为原来的样子。另外可以在 `website.css` 中加入下面的 css 代码来指定 ace 字体的大小
```css
.aceCode {
  font-size: 14px !important;
}
```

使用插件：
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

## Emphasize
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

## KaTex
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

## Include Codeblock
使用代码块的格式显示所包含文件的内容. 该文件必须存在。插件提供了一些配置，可以区插件官网查看。如果同时使用 ace 和本插件，本插件要在 ace 插件前面加载。

[插件地址](https://plugins.gitbook.com/plugin/include-codeblock)  
```json
{
    "plugins": [
        "include-codeblock"
    ],
    "pluginsConfig": {
        "include-codeblock": {
            "template": "ace",
            "unindent": "true",
            "theme": "monokai"
        }
    }
}
```
使用示例:

[import](styles/website.css)

## Splitter
使侧边栏的宽度可以自由调节

![](https://raw.githubusercontent.com/yoshidax/gitbook-plugin-splitter/master/gitbook-splitter-demo.gif)  

[插件地址](https://plugins.gitbook.com/plugin/splitter)
```json
"plugins": [
    "splitter"
]
```
## Mermaid-gb3
支持渲染[Mermaid](https://github.com/knsv/mermaid)图表  
[插件地址](https://plugins.gitbook.com/plugin/mermaid-gb3)
```json
"plugins": [
    "mermaid-gb3"
]
```
使用示例:
```mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
```

## Puml
使用 PlantUML 展示 uml 图。

[插件地址](https://plugins.gitbook.com/plugin/puml)  
[PlantUML 地址](http://plantuml.com/)

```
{
    "plugins": ["puml"]
}
```
使用示例：
```
{% plantuml %}
Class Stage
    Class Timeout {
        +constructor:function(cfg)
        +timeout:function(ctx)
        +overdue:function(ctx)
        +stage: Stage
    }
    Stage <|-- Timeout
{% endplantuml %}
```
效果如下所示：

{% plantuml %}
Class Stage
    Class Timeout {
        +constructor:function(cfg)
        +timeout:function(ctx)
        +overdue:function(ctx)
        +stage: Stage
    }
    Stage <|-- Timeout
{% endplantuml %}


## Graph

使用 function-plot 绘制数学函数图。

[插件地址](https://plugins.gitbook.com/plugin/graph)  
[function-plot](https://mauriciopoppe.github.io/function-plot/)

```json
{
    "plugins": [ "graph" ],
}
```

下面是一个示例，需要注意的是 `{% graph %}` 块中的内容必须是合法的 JSON 格式。
```
{% graph %}
{
    "title": "1/x * cos(1/x)",
    "grid": true,
    "xAxis": {
        "domain": [0.01, 1]
    },
    "yAxis": {
        "domain": [-100, 100]
    },
    "data": [{
        "fn": "1/x * cos(1/x)",
        "closed": true
    }]
}
{% endgraph %}
```

效果如下所示：
{% graph %}
{
    "title": "1/x * cos(1/x)",
    "grid": true,
    "xAxis": {
        "domain": [0.01, 1]
    },
    "yAxis": {
        "domain": [-100, 100]
    },
    "data": [{
        "fn": "1/x * cos(1/x)",
        "closed": true
    }]
}
{% endgraph %}

## Chart
使用 C3.js 或者 Highcharts 绘制图形。

[插件地址](https://plugins.gitbook.com/plugin/chart)  
[C3.js](https://github.com/c3js/c3)  
[highcharts](https://github.com/highcharts/highcharts)

```json
{
    "plugins": [ "chart" ],
    "pluginsConfig": {
        "chart": {
            "type": "c3"
        }
    }
}
```
type 可以是 `c3` 或者 `highcharts`, 默认是 `c3`.

下面是一个示例：
```
{% chart %}
{
    "data": {
        "type": "bar",
        "columns": [
            ["data1", 30, 200, 100, 400, 150, 250],
            ["data2", 50, 20, 10, 40, 15, 25]
        ],
        "axes": {
            "data2": "y2"
        }
    },
    "axis": {
        "y2": {
            "show": true
        }
    }
}
{% endchart %}
```
效果如下所示：
{% chart %}
{
    "data": {
        "type": "bar",
        "columns": [
            ["data1", 30, 200, 100, 400, 150, 250],
            ["data2", 50, 20, 10, 40, 15, 25]
        ],
        "axes": {
            "data2": "y2"
        }
    },
    "axis": {
        "y2": {
            "show": true
        }
    }
}
{% endchart %}

## Sharing-plus
分享当前页面，比默认的 sharing 插件多了一些分享方式。

[插件地址](https://plugins.gitbook.com/plugin/sharing-plus)

```json
 plugins: ["-sharing", "sharing-plus"]
```
配置:

```json
"pluginsConfig": {
    "sharing": {
       "douban": false,
       "facebook": false,
       "google": true,
       "hatenaBookmark": false,
       "instapaper": false,
       "line": true,
       "linkedin": true,
       "messenger": false,
       "pocket": false,
       "qq": false,
       "qzone": true,
       "stumbleupon": false,
       "twitter": false,
       "viber": false,
       "vk": false,
       "weibo": true,
       "whatsapp": false,
       "all": [
           "facebook", "google", "twitter",
           "weibo", "instapaper", "linkedin",
           "pocket", "stumbleupon"
       ]
   }
}
```
## Tbfed-pagefooter
为页面添加页脚

[插件地址](https://plugins.gitbook.com/plugin/tbfed-pagefooter)
```json
"plugins": [
   "tbfed-pagefooter"
],
"pluginsConfig": {
    "tbfed-pagefooter": {
        "copyright":"Copyright &copy zhangjikai.com 2017",
        "modify_label": "该文件修订时间：",
        "modify_format": "YYYY-MM-DD HH:mm:ss"
    }
}
```
## Expandable-chapters-small
使左侧的章节目录可以折叠

[插件地址](https://plugins.gitbook.com/plugin/expandable-chapters-small)

```json
plugins: ["expandable-chapters-small"]
```

## Toggle-chapters
使左侧的章节目录可以折叠。相比expandable-chapters， 没有折叠箭头符号，并且当前只有一项可以展开。参考：https://blog.csdn.net/lintcgirl/article/details/54314113

[插件地址](https://plugins.gitbook.com/plugin/toggle-chapters)

```json
plugins: ["toggle-chapters"]
```

## Sectionx
将页面分块显示，标签的 tag 最好是使用 b 标签，如果使用 h1-h6 可能会和其他插件冲突。  
[插件地址](https://plugins.gitbook.com/plugin/sectionx)  
```json
{
    "plugins": [
       "sectionx"
   ],
    "pluginsConfig": {
        "sectionx": {
          "tag": "b"
        }
      }
}
```
使用示例

<!--sec data-title="Sectionx Demo" data-id="section0" data-show=true ces-->

Insert markdown content here (you should start with h3 if you use heading).  

<!--endsec-->

## GA
Google 统计  
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
## 3-ba
百度统计  
[插件地址](https://plugins.gitbook.com/plugin/3-ba)
```json
{
    "plugins": ["3-ba"],
    "pluginsConfig": {
        "3-ba": {
            "token": "xxxxxxxx"
        }
    }
}
```
## Donate
打赏插件  
[插件地址](https://plugins.gitbook.com/plugin/donate)  
```json
"plugins": [
    "donate"
],
"pluginsConfig": {
    "donate": {
        "wechat": "https://zhangjikai.com/resource/weixin.png",
        "alipay": "https://zhangjikai.com/resource/alipay.png",
        "title": "",
        "button": "赏",
        "alipayText": "支付宝打赏",
        "wechatText": "微信打赏"
    }
}
```

## Local Video
使用Video.js 播放本地视频  
[插件地址](https://plugins.gitbook.com/plugin/local-video)  
```json
"plugins": [ "local-video" ]
```
使用示例：为了使视频可以自适应，我们指定视频的`width`为100%，并设置宽高比为`16:9`，如下面所示
```
{% raw %}
<video id="my-video" class="video-js" controls preload="auto" width="100%"
poster="https://zhangjikai.com/resource/poster.jpg" data-setup='{"aspectRatio":"16:9"}'>
  <source src="https://zhangjikai.com/resource/demo.mp4" type='video/mp4' >
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a web browser that
    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
  </p>
</video>
{% endraw %}
```
另外我们还要再配置下css，即在website.css中加入
```css
.video-js {
    width:100%;
    height: 100%;
}
```
<br />
{% raw %}
<video id="my-video" class="video-js" controls preload="auto" width="100%" poster="https://zhangjikai.com/resource/poster.jpg" data-setup='{"aspectRatio":"16:9"}'>
  <source src="http://zhangjikai.com/resource/demo.mp4" type='video/mp4' >
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a web browser that
    <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
  </p>
</video>
{% endraw %}

## Simple-page-toc
自动生成本页的目录结构。另外 GitBook 在处理重复的标题时有些问题，所以尽量不适用重复的标题。
[插件地址](https://plugins.gitbook.com/plugin/simple-page-toc)  
```json
{
    "plugins" : [
        "simple-page-toc"
    ],
    "pluginsConfig": {
        "simple-page-toc": {
            "maxDepth": 3,
            "skipFirstH1": true
        }
    }
}
```
使用方法: 在需要生成目录的地方加上 &lt;!-- toc --&gt;

## Anchors
添加 Github 风格的锚点样式

![](https://cloud.githubusercontent.com/assets/2666107/3465465/9fc9a502-0266-11e4-80ca-09a1dad1473e.png)

[插件地址](https://plugins.gitbook.com/plugin/anchors)
```json
"plugins" : [ "anchors" ]
```
## Anchor-navigation-ex
添加Toc到侧边悬浮导航以及回到顶部按钮。需要注意以下两点：
* 本插件只会提取 h[1-3] 标签作为悬浮导航
* 只有按照以下顺序嵌套才会被提取
```
# h1
## h2
### h3
必须要以 h1 开始，直接写 h2 不会被提取
## h2
```

[插件地址](https://plugins.gitbook.com/plugin/anchor-navigation-ex)
```json
{
    "plugins": [
        "anchor-navigation-ex"
    ],
    "pluginsConfig": {
        "anchor-navigation-ex": {
            "isRewritePageTitle": true,
            "isShowTocTitleIcon": true,
            "tocLevel1Icon": "fa fa-hand-o-right",
            "tocLevel2Icon": "fa fa-hand-o-right",
            "tocLevel3Icon": "fa fa-hand-o-right"
        }
    }
}
```



## Edit Link
如果将 GitBook 的源文件保存到github或者其他的仓库上，使用该插件可以链接到当前页的源文件上。   
[插件地址](https://plugins.gitbook.com/plugin/edit-link)  
```json
"plugins": ["edit-link"],
"pluginsConfig": {
    "edit-link": {
        "base": "https://github.com/USER/REPO/edit/BRANCH",
        "label": "Edit This Page"
    }
}
```

## Sitemap-general
生成sitemap  
[插件地址](https://plugins.gitbook.com/plugin/sitemap-general)  
```json
{
    "plugins": ["sitemap-general"],
    "pluginsConfig": {
        "sitemap-general": {
            "prefix": "http://gitbook.zhangjikai.com"
        }
    }
}
```
## Favicon
更改网站的 favicon.ico  
[插件地址](https://plugins.gitbook.com/plugin/favicon)  
```json
{
    "plugins": [
        "favicon"
    ],
    "pluginsConfig": {
        "favicon": {
            "shortcut": "assets/images/favicon.ico",
            "bookmark": "assets/images/favicon.ico",
            "appleTouch": "assets/images/apple-touch-icon.png",
            "appleTouchMore": {
                "120x120": "assets/images/apple-touch-icon-120x120.png",
                "180x180": "assets/images/apple-touch-icon-180x180.png"
            }
        }
    }
}
```
## Todo
添加 Todo 功能。默认的 checkbox 会向右偏移 2em，如果不希望偏移，可以在 `website.css` 里加上下面的代码:
```css
input[type=checkbox]{
    margin-left: -2em;
}
```
[插件地址](https://plugins.gitbook.com/plugin/todo)  

```json
"plugins": ["todo"]
```
使用示例：
- [ ] write some articles
- [x] drink a cup of tea

## Terminal
模拟终端显示，主要用于显示命令以及多行输出，不过写起来有些麻烦。

[插件地址](https://plugins.gitbook.com/plugin/terminal)
```json
{
    "plugins": [
        "terminal"
    ],
    "pluginsConfig": {
        "terminal": {
            "copyButtons": true,
            "fade": false,
            "style": "flat"
        }
    }
}
```

现在支持 6 种标签：
* command: Command "executed" in the terminal.
* delimiter: Sequence of characters between the prompt and the command.
* error: Error message.
* path: Directory path shown in the prompt.
* prompt: Prompt of the user.
* warning: Warning message.

标签的使用格式如下所示：
```
**[<tag_name> 内容]
```
为了使标签正常工作，需要在代码块的第一行加入 `**[termial]` 标记，下面是一个完整的示例：

<pre>```
**[terminal]
**[prompt foo@joe]**[path ~]**[delimiter  $ ]**[command ./myscript]
Normal output line. Nothing special here...
But...
You can add some colors. What about a warning message?
**[warning [WARNING] The color depends on the theme. Could look normal too]
What about an error message?
**[error [ERROR] This is not the error you are looking for]
```</pre>

效果如下所示：
```
**[terminal]
**[prompt foo@joe]**[path ~]**[delimiter  $ ]**[command ./myscript]
Normal output line. Nothing special here...
But...
You can add some colors. What about a warning message?
**[warning [WARNING] The color depends on the theme. Could look normal too]
What about an error message?
**[error [ERROR] This is not the error you are looking for]
```

terminal 支持下面 5 种样式，如果需要更换样式，在 pluginsConfig 里配置即可。
* black: Just that good old black terminal everybody loves.
* classic: Looking for green color font over a black background? This is for you.
* flat: Oh, flat colors. I love flat colors. Everything looks modern with them.
* ubuntu: Admit it or not, but Ubuntu have a good looking terminal.
* white: Make your terminal to blend in with your GitBook.

## Copy-code-button
为代码块添加复制的按钮。

[插件地址](https://plugins.gitbook.com/plugin/copy-code-button)

```json
{
    "plugins": ["copy-code-button"]
}
```
效果如下图所示：

![](assets/images/copy-code-button.png)

## Alerts
添加不同 alerts 样式的 blockquotes，目前包含 info, warning, danger 和 success 四种样式。

[插件地址](https://plugins.gitbook.com/plugin/alerts)

```json
{
    "plugins": ["alerts"]
}
```
下面是使用示例：
```
Info styling
> **[info] For info**
>
> Use this for infomation messages.

Warning styling
> **[warning] For warning**
>
> Use this for warning messages.

Danger styling
> **[danger] For danger**
>
> Use this for danger messages.

Success styling
> **[success] For info**
>
> Use this for success messages.
```
效果如下所示：

Info styling
> **[info] For info**
>
> Use this for infomation messages.

Warning styling
> **[warning] For warning**
>
> Use this for warning messages.

Danger styling
> **[danger] For danger**
>
> Use this for danger messages.

Success styling
> **[success] For info**
>
> Use this for success messages.

## Include-csv
展示 csv 文件。

[插件地址](https://plugins.gitbook.com/plugin/include-csv)

```json
{
    "plugins": ["include-csv"]
}
```
使用示例：
```
{% includeCsv  src="./assets/csv/test.csv", useHeader="true" %} {% endincludeCsv %}
```
效果如下所示：

{% includeCsv  src="./assets/csv/test.csv", useHeader="true" %} {% endincludeCsv %}

## Musicxml
支持 musicxml 格式的乐谱渲染。

[插件地址](https://plugins.gitbook.com/plugin/musicxml)  
[musicXML](http://www.musicxml.com/)

```
{
    "plugins": ["musicxml"]
}
```

下面是一个示例，需要注意的是 block 中的内容必须是一个合法的 musicxml 文件路径，并且不能有换行和空格。
```
{% musicxml %}assets/musicxml/mandoline - debussy.xml{% endmusicxml %}
```
效果如下所示
{% musicxml %}assets/musicxml/mandoline - debussy.xml{% endmusicxml %}

## Klipse
集成 Klipse (online code evaluator)

[插件地址](https://plugins.gitbook.com/plugin/klipse)  
[Klipse](https://github.com/viebel/klipse)

```
{
    "plugins": ["klipse"]
}
```

klipse 目前支持下面的语言：
* javascript: evaluation is done with the javascript function eval and pretty printing of the result is done with pretty-format
* clojure[script]: evaluation is done with Self-Hosted Clojurescript
* ruby: evaluation is done with Opal
* C++: evaluation is done with JSCPP
* python: evaluation is done with Skulpt
* scheme: evaluation is done with BiwasScheme
* PHP: evaluation is done with Uniter
* BrainFuck
* JSX
* EcmaScript2017
* Google Charts: See Interactive Business Report with Google Charts.

下面是一个使用示例：
<pre><code>```eval-python
print [x + 1 for x in range(10)]
```</code></pre>

效果如下所示：
```eval-python
print [x + 1 for x in range(10)]
```

## Versions-select
添加版本选择的下拉菜单，针对文档有多个版本的情况。

[插件地址](https://plugins.gitbook.com/plugin/versions-select)

```
{
    "plugins": [ "versions-select" ],
    "pluginsConfig": {
        "versions": {
            "options": [
                {
                    "value": "http://gitbook.zhangjikai.com",
                    "text": "v3.2.2"
                },
                {
                    "value": "http://gitbook.zhangjikai.com/v2/",
                    "text": "v2.6.4"
                }
            ]
        }
    }
}
```

我们可以自定义 css 来修改 select 的显示样式：
```css
.versions-select select {
    height: 2em;
    line-height: 2em;
    border-radius: 4px;
    background: #efefef;
}
```

效果见左上角。

## RSS
添加 rss 订阅功能。

[插件地址](https://plugins.gitbook.com/plugin/rss)

```json
{
    "plugins": [ "rss" ],
    "pluginsConfig": {
        "rss": {
            "title": "GitBook 使用教程",
            "description": "记录 GitBook 的配置和一些插件的使用",
            "author": "Jikai Zhang",
            "feed_url": "http://gitbook.zhangjikai.com/rss",
            "site_url": "http://gitbook.zhangjikai.com/",
            "managingEditor": "me@zhangjikai.com",
            "webMaster": "me@zhangjikai.com",
            "categories": [
                "gitbook"
            ]
        }
    }
}
```
效果见右上角。

## theme-comscore

主题插件, 修改标题和表格颜色。默认标题都是黑色的。

[插件地址](https://plugins.gitbook.com/plugin/theme-comscore)

``` json
{
"plugins": [
        "theme-comscore"
    ]
}
```

## summary

根据文件自动生成目录。

[插件地址](https://plugins.gitbook.com/plugin/summary)

``` json
{
"plugins": [
        "summary"
    ]
}
```
规则：

- 每个新增的目录中加入`README.md`，否则菜单为不可折叠
- 同个目录下的文件采用自然排序来决定菜单生成的前后顺序， 故在文件或目录前加入 "数字-" 如 "0-" 或 "1-" 来排序菜单的前后顺序。
- 菜单由目录自动生成，菜单名称依赖md文件中的标题， 故每个md文件中必须添加标题, 否则无法生成目录。

示例：  

我们假设您的源代码树是这样完成的：

``` bash
$ tree .
.
├── 1-Getting Started
│   ├── 0-README.md
│   └── 1-TEST.md
├── 2-Reference
│   └── 0-README.md
├── README.md
└── SUMMARY.md
```

生成的SUMMARY.md文件将如下所示：
``` bash
- [Getting Started](1-Getting Started/0-README.md)
    - [Test](1-Getting Started/1-TEST.md)
- [Reference](2-Reference/0-README.md)
```
