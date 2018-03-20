# 前言
主要记录 GitBook 的安装配置以及一些插件信息，当前使用的 GitBook 版本为 `3.2.3`。

推荐一下 [docsify](https://github.com/QingWei-Li/docsify)，相当于一个精简的 GitBook，不需要编译，使用很方便。[这里](https://github.com/zhangjikai/docsify) 基于 doscify 做了一些修改，具体的效果可以看一下 [在线的示例](http://doc.zhangjikai.com/#/) .

## 运行
* 安装 GitBook
```bash
npm install gitbook-cli -g
```
* Clone 代码到本地并运行
```bash
git clone git@github.com:zhangjikai/gitbook-use.git
cd gitbook-use
gitbook install
gitbook serve
```
* 在浏览器中打开 `http://localhost:4000/` 进行访问

## 目录
* [安装](installation.md)
* [命令](commands.md)
* [目录结构](structure.md)
* [配置](settings.md)
* [插件](plugins.md)
* [主题](themes.md)
* [bookjson](bookjson.md)

## GitBook 资源

* [GitBook主页](https://www.gitbook.com/)
* [Github地址](https://github.com/GitbookIO/)
* [GitBook编辑器](https://www.gitbook.com/editor/osx)
* [GitBook Toolchain Documentation](http://toolchain.gitbook.com/)
* [GitBook Documentation](http://help.gitbook.com/)
