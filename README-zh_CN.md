# React hook 图片懒加载组件 [![GitHub stars](https://img.shields.io/github/stars/jiaiyan/react-animate-lazy-load-image)](https://github.com/jiaiyan/react-animate-lazy-load-image/stargazers)
[English](./README.md) | 简体中文

基于React hook实现可配置动画图片懒加载组件，改变图片懒加载一闪而过的效果，自定义你想要的加载效果，也可使用第三方库，让你的图片动起来。

> 效果图 [在线预览](https://jiaiyan.github.io/react-animate-lazy-load-image/)

<div align="center">
  <img src="./pics/react-lazy-load-image.gif"/>
</div>

## 用法
安装
```javascript
// npm
npm install react-animate-lazy-load-image
// yarn
yarn add react-animate-lazy-load-image
```
```javascript
import Image from "react-animate-lazy-load-image";
// ...
<Image
    enter="show"     // 入场动画,内置淡入效果(show),也可为空
    exit="hide"      // 出厂动画,内置淡出效果(hide),也可为空
    mode="fill"      // 图片裁剪、缩放的模式
    style={{
        height: "400px",
        width: "600px",
    }}
    src="http://iph.href.lu/600x400?text=sample.jpg"
    placeholde="http://iph.href.lu/600x400?text=placeholde.jpg"
    title="title"
    alt="alt"
/>
// ...
```
> 与第三方动画库[animate.css](https://animate.style/)配合使用，可参考[examples](./examples)

引入css
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
```
直接使用class name即可，你也可以自己自定义，高度自由.
```html
<Image
    enter="animate__animated animate__zoomInDown"
    exit="animate__animated animate__zoomOutDown"
/>
```
## 配置

| 属性          | 描述            | 类型    |
| :----------: | :------------:   | :---: |
| enter        |  入场动画(内置淡入效果show)        | string  |
| exit         |  出厂动画(内置淡出效果hide)        | string  |
| mode         |  图片裁剪、缩放的模式(默认:fill)    | string  |
| src          |  图片地址        | string  |
| placeholde   |  占位图地址      | string  |
| style        |  组件样式        | object  |
| title        |  元素的额外信息   | string |
| alt          |  图像的替代文本   | string |

> mode值

|  值  | 描述  |
|:---: | :-- |
| fill | 被替换的内容正好填充元素的内容框。整个对象将完全填充此框。如果对象的宽高比与内容框不相匹配，那么该对象将被拉伸以适应内容框。 |
|  contain | 被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比。 整个对象在填充盒子的同时保留其长宽比，因此如果宽高比与框的宽高比不匹配，该对象将被添加“黑边”。|
| cover  | 被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框。 |
| none | 被替换的内容将保持其原有的尺寸。 |
| scale-down | 内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。 |

------
欢迎访问我的[博客](https://www.jiaiyan.com/)及关注我的个人微信公众号 `管子先生`
<div align="left">
  <img src="./pics/wechat.jpg"/>
</div>