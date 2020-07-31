# hook react lazy load image component [![GitHub stars](https://img.shields.io/github/stars/jiaiyan/react-animate-lazy-load-image)](https://github.com/jiaiyan/react-animate-lazy-load-image/stargazers)
English | [简体中文](./README-zh_CN.md)

implemented based on hook react lazy load image component, support for animation configuration, get your load image moving.

> preview [online preview](https://jiaiyan.github.io/react-animate-lazy-load-image/)

<div align="center">
  <img src="./pics/react-lazy-load-image.gif"/>
</div>

## usage
install
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
    enter="show" // Enter the animation, built-in fade in effect (show), also can be empty
    exit="hide"  // Factory animation, built-in fade out effect (hide), can also be empty
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
> Use with the [animate.css](https://animate.style/) third-party animation library，can refer to[examples](./examples)

import css
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
```
Just use the class name，You can also customize your own, a high degree of freedom.
```html
<Image
    enter="animate__animated animate__zoomInDown"
    exit="animate__animated animate__zoomOutDown"
/>
```
## Configuration

| attribute          | description            | data type    |
| :----------: | :------------:   | :---: |
| enter        |  Entry animation (built-in fading effect show)        | string  |
| exit         |  Factory animation (built-in fade out effect Hide)        | string  |
| src          |  Picture address        | string  |
| placeholde   |  Placeholder map address      | string  |
| style        |  Component style        | object  |
| title        |  Additional information about the element   | string |
| alt          |  Alternate text for images   | string |
