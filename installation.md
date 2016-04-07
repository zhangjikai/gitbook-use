## GitBook安装

### 环境要求

* NodeJS(v4.0.0及以上)

### 通过NPM安装
运行下面的命令进行安装
```bash
npm install gitbook-cli -g
```
其中`gitbook-cli`是gitbook的一个命令行工具, 通过它可以在电脑上安装和管理gitbook的多个版本.

### 编辑书籍
gitbook 官方已经提供了一个本地的[编辑器](https://www.gitbook.com/editor/osx), 使用它可以方便的编写书籍(不需要手动的写SUMMARY.md), 并且支持windows、mac、linux 三种平台, 所以强烈建议使用编辑器编写书籍. 

### 预览书籍
使用下列命令会运行一个服务器, 通过`http://localhost:4000/`可以预览书籍
```bash
gitbook serve
```
运行该命令后会在书籍的文件夹中生成一个 `_book` 文件夹, 里面的内容即为生成的 html 文件.
我们可以使用下面命令来生成网页而不开启服务器
```bash
gitbook build
```
